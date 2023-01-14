import i18n from 'i18next';
import {NativeModules, Platform} from 'react-native';
import {initReactI18next} from 'react-i18next';

import en from '../../assets/i18n/en.json';
import es from '../../assets/i18n/es.json';

const deviceLanguage: string =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: deviceLanguage.includes('es') ? 'es' : 'en',
  fallbackLng: 'en',
  resources: {
    en,
    es,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
