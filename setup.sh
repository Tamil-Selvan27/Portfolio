#!/bin/bash

echo "================================"
echo "Portfolio Website Setup Script"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org"
    exit 1
fi

echo "[OK] Node.js is installed"
node --version

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "[ERROR] npm is not installed"
    exit 1
fi

echo "[OK] npm is installed"
npm --version
echo ""

# Install dependencies
echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "[ERROR] Dependency installation failed"
    exit 1
fi

echo ""
echo "[OK] Setup completed successfully!"
echo ""
echo "To start development server, run:"
echo "  npm start"
echo ""
echo "The application will open at http://localhost:3000"
echo ""
