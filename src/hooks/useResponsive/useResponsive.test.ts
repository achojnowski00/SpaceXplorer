import { renderHook } from '@testing-library/react';
import useResponsive from '.';

describe('useResponsive', () => {
  beforeEach(() => {
    global.innerWidth = 1920;
  });

  it('should return desktop responsive result', () => {
    const { result } = renderHook(useResponsive);
    expect(result.current[0]).toBe<IDeviceType>('desktop');
  });

  it('should return mobile responsive result', () => {
    global.innerWidth = 400;
    const { result } = renderHook(useResponsive);
    expect(result.current[0]).toBe<IDeviceType>('mobile');
  });

  it('should return correct inner width value', () => {
    const widthMock = 400;
    global.innerWidth = widthMock;

    const { result } = renderHook(useResponsive);
    expect(result.current[1]).toBe<number>(widthMock);
  });
});
