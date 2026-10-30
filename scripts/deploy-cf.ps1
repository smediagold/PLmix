# OpenNext fails on paths with non-ASCII characters, so build from an ASCII mirror.
$src = Split-Path -Parent $PSScriptRoot
$dst = 'C:\plbuild\web'
robocopy $src $dst /MIR /XD node_modules .next .open-next .git .wrangler .taste-skill .vercel /NFL /NDL /NJH /NJS /NP | Out-Null
Set-Location $dst
if (-not (Test-Path node_modules)) { npm ci --no-audit --no-fund }
npx opennextjs-cloudflare build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
node scripts/extract-html.mjs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
npx wrangler deploy
