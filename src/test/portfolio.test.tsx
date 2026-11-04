import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import App from "../App";
import { ProjectArchive, ProjectDialog } from "../components/Projects";
import { ArchitecturePlayground } from "../components/Architecture";
import { HeroSystem } from "../components/Architecture";
import { LanguageProvider } from "../lib/language";
import { categories, cvTracks, projects } from "../data/projects";
import github from "../data/github.json";

afterEach(() => vi.useRealTimers());

describe("repository collection", () => {
  it("covers every audited public repository exactly once", () => {
    expect(new Set(projects.map((p) => p.id)).size).toBe(projects.length);
    expect(projects.map((p) => p.id).sort()).toEqual(
      github.repositories.map((r) => r.name).sort(),
    );
    expect(projects.filter((p) => p.featured)).toHaveLength(6);
    for (const project of projects) {
      expect(project.source).toMatch(/^https:\/\/github\.com\/redaelfer\//);
      expect(project.demoUrl).toBeNull();
      expect(project.media.src).toBeNull();
      expect(project.description.en.length).toBeGreaterThan(20);
      expect(project.description.fr.length).toBeGreaterThan(20);
      expect(categories.map((c) => c.id)).toContain(project.category);
    }
  });
  it("ships all eight current CVs as actual PDFs", () => {
    for (const track of cvTracks)
      for (const language of ["ENG", "FR"]) {
        const filename = resolve(
          "public/cv",
          `cv-redaelferrasi-${track.id}-${language}.pdf`,
        );
        expect(existsSync(filename), filename).toBe(true);
        expect(readFileSync(filename).subarray(0, 5).toString()).toBe("%PDF-");
      }
  });
});

describe("project archive", () => {
  it("combines technology search and discipline filters, handles empty results and resets", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <ProjectArchive onSelect={vi.fn()} />
      </LanguageProvider>,
    );
    expect(screen.getByRole("status")).toHaveTextContent(
      "14 of 14 repositories",
    );
    await user.type(screen.getByRole("searchbox"), "TensorFlow");
    expect(screen.getByRole("status")).toHaveTextContent("2 of 14");
    expect(screen.getByRole("button", { name: /RetinaScan/ })).toBeVisible();
    expect(screen.getByRole("button", { name: /APT Detection/ })).toBeVisible();
    await user.click(screen.getByRole("button", { name: /Full stack/ }));
    expect(screen.getByRole("status")).toHaveTextContent("1 of 14");
    await user.clear(screen.getByRole("searchbox"));
    await user.type(screen.getByRole("searchbox"), "nothing-matches-this");
    expect(screen.getByText("No projects found.")).toBeVisible();
    await user.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.getByRole("status")).toHaveTextContent("14 of 14");
  });
  it("sorts by name and supports the search keyboard shortcut", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <ProjectArchive onSelect={vi.fn()} />
      </LanguageProvider>,
    );
    await user.selectOptions(screen.getByRole("combobox"), "name");
    const rows = screen.getAllByRole("article");
    expect(within(rows[0]).getByRole("button")).toHaveTextContent(
      "Academic Connect",
    );
    fireEvent.keyDown(document.body, { key: "/" });
    expect(screen.getByRole("searchbox")).toHaveFocus();
  });
});

describe("bilingual portfolio and accessible dialogs", () => {
  it("starts in English, switches the page and CV library into French", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(document.documentElement.lang).toBe("en");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "From data to",
    );
    await user.click(screen.getByRole("button", { name: "FR" }));
    expect(document.documentElement.lang).toBe("fr");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Des données à",
    );
    expect(localStorage.getItem("portfolio-language")).toBe("fr");
    await user.click(screen.getByRole("button", { name: "Mon CV" }));
    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByRole("heading", {
        name: "Un CV pour chaque échange.",
      }),
    ).toBeVisible();
    const downloads = within(dialog).getAllByRole("link");
    expect(downloads).toHaveLength(8);
    expect(downloads.every((link) => link.hasAttribute("download"))).toBe(true);
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("opens an honest case study and restores focus to its trigger on Escape", async () => {
    const user = userEvent.setup();
    render(<App />);
    const trigger = screen.getByRole("button", { name: "Explore TalentAI" });
    await user.click(trigger);
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText(/Screenshot placeholder/)).toBeVisible();
    expect(
      within(dialog).getByRole("link", { name: /Explore the repository/ }),
    ).toHaveAttribute("href", "https://github.com/redaelfer/TalentAI");
    expect(
      within(dialog).queryByRole("link", { name: /live app/ }),
    ).not.toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
  it("renders every project case study without claiming a live app", () => {
    for (const project of projects) {
      const { unmount } = render(
        <LanguageProvider>
          <ProjectDialog project={project} onClose={vi.fn()} />
        </LanguageProvider>,
      );
      expect(screen.getByRole("dialog")).toHaveAccessibleName(project.name);
      expect(screen.getByText(/Screenshot placeholder/)).toBeVisible();
      unmount();
    }
  });
  it("shows and closes mobile navigation and expands career details", async () => {
    const user = userEvent.setup();
    render(<App />);
    const menu = screen.getByRole("button", { name: "Toggle navigation" });
    await user.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
    const mobileNav = document.getElementById("mobile-navigation")!;
    await user.click(
      within(mobileNav).getByRole("link", { name: "Experience" }),
    );
    expect(menu).toHaveAttribute("aria-expanded", "false");
    const oncf = screen.getByRole("button", { name: /JUN — AUG 2025/ });
    await user.click(oncf);
    expect(oncf).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(
        "Reduced incident detection time by 35% during NOC testing.",
      ),
    ).toBeVisible();
  });
});

describe("interactive architecture", () => {
  it("changes the introduction when a layer is selected", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <HeroSystem />
      </LanguageProvider>,
    );
    await user.click(
      screen.getByRole("button", { name: "Explore Data layer" }),
    );
    expect(
      screen.getByText("Good intelligence starts with well-prepared data."),
    ).toBeVisible();
  });
  it("walks through a pipeline, finishes, and resets correctly when switching projects", () => {
    vi.useFakeTimers();
    render(
      <LanguageProvider>
        <ArchitecturePlayground />
      </LanguageProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "BigData" }));
    fireEvent.click(
      screen.getByRole("button", { name: "Play architecture walkthrough" }),
    );
    expect(
      screen.getByRole("button", { name: /01.*Generate/ }),
    ).toHaveAttribute("aria-pressed", "true");
    for (let i = 0; i < 4; i++) act(() => vi.advanceTimersByTime(1250));
    expect(
      screen.getByRole("button", { name: "Play architecture walkthrough" }),
    ).toHaveTextContent("Replay flow");
    expect(screen.getByRole("button", { name: /04.*Store/ })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    fireEvent.click(screen.getByRole("button", { name: "TalentAI" }));
    expect(
      screen.getByRole("button", { name: /01.*Candidate CV/ }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("button", { name: "Play architecture walkthrough" }),
    ).toHaveTextContent("Follow the flow");
  });
});
