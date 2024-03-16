import { FC } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Flex from 'src/components/Flex';
import NoPhotoAvailable from 'src/components/NoPhotoAvailable';
import CountryFlag from 'src/components/CountryFlag';

import DotIcon from 'assets/icons/dot_icon.svg';

import { IMissionNode } from 'src/Api/MISSIONS';

import './mission-tile.scss';
import ROUTES from 'src/ROUTES';

const MissionTile: FC<IProps> = ({ className, mission }) => {
  const { t } = useTranslation('mission');

  const { name, links, launchDate, rocket, id } = mission;
  const {
    rockerNode: { country, name: rocketName },
  } = rocket;

  const date = dayjs(launchDate).format('DD.MM.YYYY');

  // const imageIndex = Math.floor(Math.random() * links.images.length);
  const imageIndex = 0;
  const imageUrl = links.images[imageIndex];

  return (
    <Link
      to={ROUTES.missionDetails.get({
        missionId: id,
      })}
      title={t('click_and_go_to_details')}
      className={clsx('mission-tile', className)}
    >
      <div className="mission-tile__image-container">
        {imageUrl ? (
          <img className="mission-tile__image" src={imageUrl} alt={mission.name} />
        ) : (
          <NoPhotoAvailable className="mission-tile__image" />
        )}
      </div>

      <div className="mission-tile__content">
        <Flex gap="10px" justify="start">
          <p className="content__mission-name">{name}</p>
          <DotIcon className="content__separator" />
          <p className="content__mission-rocket-name">{rocketName}</p>
          <DotIcon className="content__separator" />
          <CountryFlag className="content__country-flag" country={country} />
        </Flex>

        <p className="content__mission-date">{date}</p>
      </div>
    </Link>
  );
};

type IProps = IComponent & {
  mission: IMissionNode;
};

export default MissionTile;
