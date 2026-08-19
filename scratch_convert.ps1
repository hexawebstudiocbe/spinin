Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("d:\Varun\Spinin\src\assets\SPIN IN Logo.jpg.jpeg")

# apple-touch-icon.png (180x180)
$bmpApple = new-object System.Drawing.Bitmap $img, 180, 180
$bmpApple.Save("d:\Varun\Spinin\public\apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpApple.Dispose()

# favicon.ico (48x48 - PNG encoded but .ico extension is widely supported by browsers)
$bmpIco = new-object System.Drawing.Bitmap $img, 48, 48
$bmpIco.Save("d:\Varun\Spinin\public\favicon.ico", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpIco.Dispose()

$img.Dispose()
