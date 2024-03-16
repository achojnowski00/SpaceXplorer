import { FC } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import Flex from '../Flex';

import Image from 'assets/images/rocket.webp';
import CameraIcon from 'assets/icons/crossed_camera_icon.svg';

import './no-photo-available.scss';

const NoPhotoAvailable: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx('no-photo-available', className)}>
      <img
        src={Image}
        alt={t('common:no_photo_available')}
        className="no-photo-available__background"
      />
      <Flex justify="center" direction="column" className="no-photo-available__content">
        <CameraIcon className="no-photo-available__camera-icon" />
        <p className="no-photo-available__info">{t('common:no_photo_available')}</p>
      </Flex>
    </div>
  );
};

type IProps = IComponent & {
  backgroundImageClassName?: string;
};

export default NoPhotoAvailable;
