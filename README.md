# Some Simple set up instructions

Follow the instructions of react native set up from here 

https://facebook.github.io/react-native/releases/next/docs/getting-started.html

The two codes below in two separate terminals. Start with  `react-native start`
```
react-native start
react-native run-android
```

Use android studio to make sure you have `Build tools 23.0.1` and `android-23`, set up env var `$ANDROID_HOME=<where ever your sdk is>` in your respective windows/mac stuff

if you get some watchman errors:

```
npm r -g watchman
brew update && brew upgrade
brew install watchman
```