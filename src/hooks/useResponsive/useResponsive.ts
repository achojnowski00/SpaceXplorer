import { useEffect, useRef, useState } from 'react';

export default function useResponsive(): IUseResponsive {
  const [deviceType, setDeviceType] = useState<IResponsiveResult>(null);
  const [innerWidth, setInnerWidth] = useState<IResponsiveInnerWidth>(null);
  const observer = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (!window) return;

    observer.current = new ResizeObserver(() => {
      const windowWidth = window.innerWidth;
      setDeviceType(windowWidth >= 1024 ? 'desktop' : 'mobile');
      setInnerWidth(windowWidth);
    });

    observer.current.observe(window.document.body);

    return () => {
      if (!observer.current) return;

      observer.current.unobserve(window.document.body);
      observer.current = null;
    };
  }, []);

  return [deviceType, innerWidth];
}

export type IResponsiveResult = IDeviceType | null;
export type IResponsiveInnerWidth = number | null;
export type IUseResponsive = [IResponsiveResult, IResponsiveInnerWidth];
