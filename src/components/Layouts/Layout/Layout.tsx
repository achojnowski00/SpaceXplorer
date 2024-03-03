import { Outlet } from 'react-router-dom';

import Responsive from 'src/components/Responsive';
import MobileDrawer from 'src/components/MobileDrawer';
import NavigationBar from 'src/components/NavigationBar';
import MaxWidthContentWrapper from 'src/components/MaxWidthContentWrapper';

import './layout.scss';

const Layout = () => {
  return (
    <div className="layout">
      <Responsive device="mobile">
        <MobileDrawer />
      </Responsive>
      <Responsive device="desktop">
        <NavigationBar />
      </Responsive>

      <MaxWidthContentWrapper className="layout__content">
        <Outlet />
      </MaxWidthContentWrapper>
    </div>
  );
};

export default Layout;
