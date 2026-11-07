@echo off
title Publish portfolio to GitHub Pages
set "PATH=C:\Program Files\GitHub CLI;C:\Program Files\Git\cmd;%PATH%"
cd /d "%~dp0"
color 0E
cls
echo.
echo   ===========================================================
echo     PUBLISHING YOUR PORTFOLIO
echo   ===========================================================
echo.
echo   This creates a PUBLIC repository called
echo       sabittahsan-eng.github.io
echo   and uploads 153 files (about 27 MB).
echo.
echo   Public means anyone can see the code and the images.
echo   Your CV PDF is deliberately excluded.
echo.
echo   Press Ctrl+C now if you do not want that.
echo   -----------------------------------------------------------
pause
echo.

echo   [1/3] Creating the repository and uploading...
echo.
gh repo create sabittahsan-eng.github.io --public --source=. --remote=origin --push --description "Personal portfolio - visual identity, brand activation, photography and film. Built from scratch, no framework."
if errorlevel 1 goto failed
echo.

echo   [2/3] Switching on GitHub Pages...
echo.
gh api -X POST "repos/sabittahsan-eng/sabittahsan-eng.github.io/pages" -f "source[branch]=main" -f "source[path]=/" >nul 2>&1
if errorlevel 1 echo         (already on, or it turns itself on - this is fine)
echo.

echo   [3/3] Done uploading.
echo.
echo   ===========================================================
echo     YOUR SITE:  https://sabittahsan-eng.github.io
echo   ===========================================================
echo.
echo   The first build takes 1 to 10 minutes. A 404 right away is
echo   normal - wait, then press Ctrl+F5 in the browser.
echo.
echo   Now go back to Claude and say: pushed
echo   Claude will check the live URL and confirm it is working.
echo.
pause
exit /b 0

:failed
echo.
echo   -----------------------------------------------------------
echo   Something went wrong. Copy everything above this line and
echo   paste it to Claude.
echo   -----------------------------------------------------------
echo.
pause
exit /b 1
