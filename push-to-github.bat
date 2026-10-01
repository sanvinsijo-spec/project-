@echo off
title Push AuraStyle to GitHub
cd /d "%~dp0"
echo ===================================================
echo   Pushing AuraStyle to GitHub Repository:
echo   https://github.com/sanvinsijo-spec/saloon-project.git
echo ===================================================
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ===================================================
    echo   SUCCESS: Code pushed to GitHub successfully!
    echo ===================================================
) else (
    echo ===================================================
    echo   If authentication failed, please generate a
    echo   GitHub Personal Access Token (classic) with 'repo'
    echo   permission and use it as your password.
    echo ===================================================
)
echo.
pause
