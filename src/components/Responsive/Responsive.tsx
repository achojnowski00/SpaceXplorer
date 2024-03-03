import { FC, ReactNode } from 'react';
import useResponsive from 'src/hooks/useResponsive';

const Responsive: FC<IProps> = ({ device, children }) => {
  const [deviceType] = useResponsive();

  if (deviceType === device) return children;

  return null;
};

type IProps = {
  device: IDeviceType;
  children: ReactNode;
};

export default Responsive;
