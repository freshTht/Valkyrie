// 
// LOCALIZATIONS
// 
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import th from './th'

// const th = {}
const en = th

i18n.fallbacks = true
i18n.translations = { th, en }
i18n.locale = Localization.locale