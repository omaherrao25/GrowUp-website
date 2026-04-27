$c = Get-Content src\index.css
$c[1841] = '  padding-top: 0.2rem;'
$c[1860] = '  padding-top: 0rem;'
$c | Set-Content src\index.css
