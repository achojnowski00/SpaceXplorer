import { vitest } from 'vitest';
import { renderHook } from '@testing-library/react';

import useDynamicTranslation from '.';

const mockedTranslation = 'mockedTranslation';
vitest.mock('react-i18next', () => ({
  useTranslation: (): any => ({
    t: (): string => mockedTranslation,
  }),
}));

describe('useDynamicTranslation', () => {
  it('should return key when text textType is passed', () => {
    const key = 'ns:key';

    const { result } = renderHook(() => useDynamicTranslation(key, 'text'), {
      initialProps: {},
    });

    expect(result.current).toBe(key);
  });

  it('should return key when no textType is passed', () => {
    const key = 'ns:key';

    const { result } = renderHook(() => useDynamicTranslation(key), {
      initialProps: {},
    });

    expect(result.current).toBe(key);
  });

  it('should return mocked translation when translation textType is passed', () => {
    const key = 'ns:key';

    const { result } = renderHook(() => useDynamicTranslation(key, 'translation'), {
      initialProps: {},
    });

    expect(result.current).toBe(mockedTranslation);
  });
});
