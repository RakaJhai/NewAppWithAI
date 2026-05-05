# NewAppWithAI

A React Native mobile app with bottom tab navigation, search functionality, and detail navigation.

## Features

- Bottom tab navigation with:
  - Home
  - Portofolio
  - Setting
- Search list of animal names with live filtering
- Clickable animal list items that navigate to a detail screen
- Theme-aware text colors for dark and light mode
- Clean modular folder structure with `src/navigation` and `src/screens`

## Project structure

- `App.tsx` — app entry point
- `src/navigation/AppNavigator.tsx` — root stack navigator
- `src/navigation/HomeTabScreen.tsx` — bottom tab navigator
- `src/screens/HomeScreen.tsx` — home search screen
- `src/screens/PortfolioScreen.tsx` — portfolio tab screen
- `src/screens/SettingScreen.tsx` — settings tab screen
- `src/screens/DetailsScreen.tsx` — item detail screen

## Getting started

### Install dependencies

```sh
npm install
```

### Run on Android

```sh
npm run android
```

### Run on iOS

```sh
npm run ios
```

## Notes

- This project uses `@react-navigation/native`, `@react-navigation/bottom-tabs`, and `react-native-vector-icons`
- Android is the primary target for immediate testing

## License

MIT
