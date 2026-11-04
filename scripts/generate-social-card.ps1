$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$canvas = [System.Drawing.Bitmap]::new(1200, 630)
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$paper = [System.Drawing.ColorTranslator]::FromHtml('#f5f5ef')
$green = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#174a39'))
$muted = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#6b7c60'))
$lime = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml('#d9efac'), 2)
$heading = [System.Drawing.Font]::new('Arial', 58, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$small = [System.Drawing.Font]::new('Arial', 23, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$italic = [System.Drawing.Font]::new('Georgia', 68, [System.Drawing.FontStyle]::Italic, [System.Drawing.GraphicsUnit]::Pixel)
try {
    $graphics.Clear($paper)
    $graphics.FillEllipse($green, 870, 85, 475, 475)
    $graphics.DrawEllipse($lime, 930, 145, 355, 355)
    $graphics.DrawString('REDA EL FERRASI / PORTFOLIO', $small, $green, 80, 85)
    $graphics.DrawString('From data to', $heading, $green, 75, 235)
    $graphics.DrawString('useful intelligence.', $italic, $green, 72, 315)
    $graphics.DrawString('AI  /  MACHINE LEARNING  /  DATA  /  FULL STACK', $small, $muted, 80, 505)
    $target = Join-Path $PSScriptRoot '../public/social-card.png'
    $canvas.Save($target, [System.Drawing.Imaging.ImageFormat]::Png)
} finally {
    $heading.Dispose(); $small.Dispose(); $italic.Dispose()
    $green.Dispose(); $muted.Dispose(); $lime.Dispose()
    $graphics.Dispose(); $canvas.Dispose()
}
