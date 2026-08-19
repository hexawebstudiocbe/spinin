Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("d:\Varun\Spinin\src\assets\SPIN IN Logo.jpg.jpeg")
$bmp = new-object System.Drawing.Bitmap $img, 192, 192
$bmp.Save("d:\Varun\Spinin\public\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$img.Dispose()
