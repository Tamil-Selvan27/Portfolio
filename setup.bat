@echo off
setlocal enabledelayedexpansion

echo ================================
echo Portfolio Website Setup Script
echo ================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org
    echo After installation, run this script again
    pause
    exit /b 1
)

echo [OK] Node.js is installed
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm is not installed
    pause
    exit /b 1
)

echo [OK] npm is installed
npm --version
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if errorlevel 1 (
    echo [ERROR] Dependency installation failed
    pause
    exit /b 1
)

echo.
echo [OK] Setup completed successfully!
echo.
echo To start development server, run:
echo   npm start
echo.
echo The application will open at http://localhost:3000
echo.
pause
