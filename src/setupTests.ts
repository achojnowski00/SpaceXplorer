import '@testing-library/jest-dom';
import { vitest } from 'vitest';

vitest.mock('react-i18next', () => ({
  useTranslation: (): any => ({
    t: (key: string): string => key,
  }),
}));
