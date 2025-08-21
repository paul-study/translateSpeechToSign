# 🤟 Speech to Sign Language Translator

A React-based web application that converts spoken words into sign language representations using the Web Speech API.

## Features

- **🎤 Speech Recognition**: Uses browser's built-in Web Speech API to capture spoken words
- **🤟 Sign Language Dictionary**: Extensive dictionary of common ASL signs with emoji representations
- **✋ Fingerspelling**: Automatic fallback to fingerspelling for words not in dictionary
- **▶️ Playback Mode**: Sequential playback of signs with visual highlighting
- **📱 Responsive Design**: Works on desktop and mobile devices
- **🌐 Static Deployment**: No backend required, perfect for Netlify deployment

## Browser Compatibility

This app requires a browser that supports the Web Speech API:
- ✅ Google Chrome (recommended)
- ✅ Microsoft Edge
- ✅ Safari (iOS/macOS)
- ❌ Firefox (limited support)

## How to Use

1. **Click "Start Speaking"** - Begin voice recognition
2. **Speak clearly** into your microphone
3. **View the translation** - See your words converted to sign language
4. **Use playback** - Click "Play Sequence" to see signs one by one

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Opens the app in development mode at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

Creates a `build` folder with optimized static files ready for deployment.

## Deployment to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repo for continuous deployment

3. **Configure build settings** (if using Git):
   - Build command: `npm run build`
   - Publish directory: `build`

## Sign Language Dictionary

The app includes a comprehensive dictionary with:

- **Greetings**: hello, hi, goodbye, please, thank you
- **Pronouns**: I, me, you, we
- **Family**: mother, father, sister, brother, family
- **Actions**: go, come, eat, drink, sleep, work, play
- **Objects**: house, car, food, water, book, phone
- **Colors**: red, blue, green, yellow, black, white
- **Numbers**: 1-10
- **Emotions**: happy, sad, love, like, want, need
- **Question words**: what, where, when, why, how, who
- **And much more!**

### Extending the Dictionary

To add new signs, edit `src/data/signDictionary.js`:

```javascript
newword: {
  display: "🤟 SIGN-REPRESENTATION",
  description: "Description of how to make the sign"
}
```

## Architecture

```
src/
├── components/
│   ├── SpeechToSign.js      # Main speech recognition component
│   ├── SignDisplay.js       # Sign visualization component
│   └── *.css               # Component styles
├── data/
│   └── signDictionary.js    # Sign language dictionary
├── App.js                   # Main app component
└── index.js                # React entry point

public/
├── index.html              # HTML template
├── manifest.json           # PWA manifest
└── robots.txt             # SEO robots file
```

## Future Enhancements

- **3D Avatar**: Integrate 3D sign language avatar using Three.js
- **Video Signs**: Replace emoji with actual sign language videos
- **Multiple Languages**: Support for different sign languages (BSL, ASL, etc.)
- **Practice Mode**: Interactive learning features
- **Offline Support**: PWA capabilities for offline use
- **Voice Profiles**: Custom voice recognition training

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- American Sign Language (ASL) community
- Web Speech API developers
- React community
- Emoji designers for visual representations

---

**Note**: This app provides basic sign language representations using emojis and text descriptions. For accurate ASL learning, please consult with qualified ASL instructors and use proper video resources.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
