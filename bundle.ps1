$enc = [System.Text.Encoding]::UTF8
$index = [System.IO.File]::ReadAllText('C:\Work\G-telp_G\index.html', $enc)
$splitIndex = $index.IndexOf('<!-- 스크립트 로드 -->')
if ($splitIndex -lt 0) { throw 'Cannot find script load marker' }
$htmlPrefix = $index.Substring(0, $splitIndex)

$cheat = [System.IO.File]::ReadAllText('C:\Work\G-telp_G\data\cheatsheet.js', $enc)
$gen = [System.IO.File]::ReadAllText('C:\Work\G-telp_G\data\generator.js', $enc)
$q = [System.IO.File]::ReadAllText('C:\Work\G-telp_G\data\questions.js', $enc)
$app = [System.IO.File]::ReadAllText('C:\Work\G-telp_G\app.js', $enc)

$scriptOpen = "  <script>`r`n"
$scriptClose = "`r`n  </script>`r`n</body>`r`n</html>"

$master = $htmlPrefix + $scriptOpen + $cheat + "`r`n`r`n" + $gen + "`r`n`r`n" + $q + "`r`n`r`n" + $app + $scriptClose
[System.IO.File]::WriteAllText('C:\Work\G-telp_G\gtelp_master.html', $master, $enc)
Write-Output "gtelp_master.html bundled successfully. Size: $($master.Length) bytes."
