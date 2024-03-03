import { FC, ReactNode, useRef, useEffect } from 'react';

type IProps = IComponent & {
  children: ReactNode;
  onClickAway: (e: MouseEvent) => void;
};

const ClickAway: FC<IProps> = ({ children, onClickAway, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      const node = event.target as Node;

      if (ref.current && !ref.current.contains(node)) {
        onClickAway(event);
      }
    };

    document.addEventListener('click', onClickOutside, true);

    return () => {
      document.removeEventListener('click', onClickOutside, true);
    };
  }, [onClickAway]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ClickAway;
