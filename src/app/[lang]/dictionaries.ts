// dictionaries.ts
// import 'server-only'
import en from '../../../public/locales/en.json';


const dictionaries = {
  en: () => import('../../../public/locales/en.json').then((module) => module.default),
  sr: () => import('../../../public/locales/sr.json').then((module) => module.default),
  ru: () => import('../../../public/locales/ru.json').then((module) => module.default),
} as const;

export type Locale = keyof typeof dictionaries;

export type Translation = typeof en;

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
}