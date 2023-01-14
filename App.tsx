import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import './src/Common/Utils/i18n';
import {Router} from './src/Router';
import {BACKGROUND_APP_COLOR} from './src/Common/Constants/colors';

const backgroundStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

function App() {
  return (
    <SafeAreaView style={backgroundStyle.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={BACKGROUND_APP_COLOR}
      />
      <Router />
    </SafeAreaView>
  );
}

export default App;
