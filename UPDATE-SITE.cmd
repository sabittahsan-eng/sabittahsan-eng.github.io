@echo off
title Update the live site
set "PATH=C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;%PATH%"
cd /d "%~dp0"
color 0A
cls
echo.
echo   ===========================================================
echo     PUSHING YOUR CHANGES LIVE
echo   ===========================================================
echo.
echo   What changed since the last time:
echo.
git status --short
echo.
echo   -----------------------------------------------------------
echo   Press ENTER to publish these, or Ctrl+C to cancel.
pause >nul
echo.

git add -A
git commit -m "Update site content"
if errorlevel 1 echo   (nothing new to commit - pushing anyway)
git push
if errorlevel 1 goto failed

echo.
echo   ===========================================================
echo     Pushed. https://sabittahsan-eng.github.io
echo   ===========================================================
echo.
echo   Live in about a minute. Then press Ctrl+F5 in the browser.
echo.
pause
exit /b 0

:failed
echo.
echo   -----------------------------------------------------------
echo   Push failed. Copy everything above and paste it to Claude.
echo   -----------------------------------------------------------
echo.
pause
exit /b 1
