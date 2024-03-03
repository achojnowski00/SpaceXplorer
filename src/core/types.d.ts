declare module '*.svg' {
  const content: any;
  export = content;
}

type IComponent = { className?: string };

type ITextType = 'translation' | 'text';

type IDeviceType = 'mobile' | 'desktop';
