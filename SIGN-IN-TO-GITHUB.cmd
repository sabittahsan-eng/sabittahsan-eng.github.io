@echo off
title Sign in to GitHub
set "PATH=C:\Program Files\GitHub CLI;C:\Program Files\Git\cmd;%PATH%"
color 0E
cls
echo.
echo   ===========================================================
echo     CONNECTING YOUR GITHUB ACCOUNT TO THIS PC
echo   ===========================================================
echo.
echo   Do the GitHub signup FIRST if you have not already.
echo.
echo   In a moment you will be asked four questions. Move with the
echo   ARROW KEYS, choose with ENTER. Answer them like this:
echo.
echo     What account do you want to log into?
echo         --^> GitHub.com
echo.
echo     What is your preferred protocol for Git operations?
echo         --^> HTTPS
echo.
echo     Authenticate Git with your GitHub credentials?
echo         --^> Y
echo.
echo     How would you like to authenticate GitHub CLI?
echo         --^> Login with a web browser
echo.
echo   It will then show a ONE-TIME CODE, like ABCD-1234.
echo   Copy it, press ENTER, and paste it into the browser page
echo   that opens. Then come back here.
echo.
echo   -----------------------------------------------------------
pause
echo.
gh auth login
echo.
echo   ===========================================================
gh auth status
echo   ===========================================================
echo.
echo   If it says "Logged in to github.com", you are done.
echo   Go back to Claude and say: signed in
echo.
pause
