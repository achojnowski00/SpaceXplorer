import { useTranslation } from 'react-i18next';

export default function useDynamicTranslation(key: string, textType?: ITextType): string {
  const { t } = useTranslation();

  if (textType === 'translation') return t(key);

  return key;
}
