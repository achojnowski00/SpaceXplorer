import '@testing-library/jest-dom';
import { vitest } from 'vitest';

vitest.mock('react-i18next', () => ({
  useTranslation: (): any => ({
    t: (key: string): string => key,
  }),
}));

class ResizeObserverMock {
  cb: ResizeObserverCallback;

  constructor(cb: ResizeObserverCallback) {
    this.cb = cb;
  }

  observe() {
    this.cb([], this);
  }
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;
