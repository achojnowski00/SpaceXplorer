import i18n, { i18n as I18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const FALLBACK_LANG: ILangType = 'en';
export const LANGS = [
  'en',
  // 'pl',
  // 'uk',
] as const;
export const I18_LANGUAGE_STORAGE_KEY = 'i18nextLng';

export type ILangType = (typeof LANGS)[number];

const langs = {
  en: () => import('assets/langs/en'),
  // pl: () => import('assets/langs/pl'),
  // uk: () => import('assets/langs/uk'),
};

const inferLang = (input: string): ILangType => {
  if (LANGS.includes(input as any)) return input as ILangType;

  let result: ILangType = FALLBACK_LANG;

  if (input.includes('-')) {
    const tmp = input.split('-')[0] as any;

    if (LANGS.includes(tmp)) {
      result = tmp as ILangType;
    }
  }

  return result;
};

export const addLanguageResourceBundle = async (i18n: I18n, newLanguage: string) => {
  const lang = inferLang(newLanguage);
  const resources: any = await langs[lang]();

  Object.keys(resources).forEach((key) => {
    const content = resources[key] as Record<string, string>;
    i18n.addResourceBundle(lang, key, content, true, true);
  });
};

export const changeLanguage = async (i18n: I18n, newLanguage: string) => {
  return addLanguageResourceBundle(i18n, newLanguage).then(() => {
    return i18n.changeLanguage(newLanguage);
  });
};

const initI18n = async () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {},
      fallbackLng: FALLBACK_LANG,
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
    });

  await addLanguageResourceBundle(i18n, i18n.language);
};

export default initI18n;
