@echo off

REM Build script for Speech to Sign Language Translator

echo 🏗️ Building Speech to Sign Language Translator...
echo.

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Run build
echo 🔨 Building for production...
npm run build

echo.
echo ✅ Build complete! Your app is ready for deployment.
echo.
echo 📁 Built files are in the 'build' folder
echo 🌐 To deploy to Netlify:
echo    1. Drag and drop the 'build' folder to https://app.netlify.com/drop
echo    2. Or connect your GitHub repo for continuous deployment
echo.
echo 🎤 Make sure to test in Chrome, Edge, or Safari for speech recognition support!
