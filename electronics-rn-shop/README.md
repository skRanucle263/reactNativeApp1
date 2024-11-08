## Setup Commands =>

### 1. Step-1 :

npx create-expo-app@latest -t : For expo app template. -t means template.
Select Template as per project requirements : Blank Typescript
npm cache clean --force
npm install -g expo-cli (if expo-cli is not installed and the npx expo install is giving errors)
If npx is not working use npm

### 2. Step-2 :

npm expo install react-native-web react-dom @expo/metro-runtime : To run app in the local browser / web
npm expo start : Start App , npx expo start -c : Cache Clean and Start

### 3. Step-3 :

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
In the package.json paste the following "main": "expo-router/entry",
Check the babel.config.js for presets: ['babel-preset-expo'],
