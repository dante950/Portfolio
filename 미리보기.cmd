@echo off
setlocal
cd /d "%~dp0"
set "PORTFOLIO_NODE="
for /f "delims=" %%N in ('where node 2^>nul') do if not defined PORTFOLIO_NODE set "PORTFOLIO_NODE=%%N"
if not defined PORTFOLIO_NODE set "PORTFOLIO_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%PORTFOLIO_NODE%" (
  echo Please install Node.js 22.12 or later.
  pause
  exit /b 1
)
if not exist "node_modules\vite\bin\vite.js" (
  echo Please run pnpm install first. See README.md.
  pause
  exit /b 1
)
echo Portfolio preview: http://127.0.0.1:5173/
echo Keep this window open. Press Ctrl+C to stop.
"%PORTFOLIO_NODE%" "node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 5173 --strictPort --open
pause
