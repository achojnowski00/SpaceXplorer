import { FC } from 'react';
import clsx from 'clsx';

import Flex from 'src/components/Flex';
import MissionTile from './items/MissionTile';
import Loader from 'src/components/Loader';

import { IMissionNode } from 'src/Api/MISSIONS';

import './missions-page.scss';

const MissionsPageRender: FC<IProps> = ({ className, missions, isLoading }) => {
  if (isLoading)
    return (
      <div className={clsx('missions-page-render', className)}>
        <Loader className="missions-page-render__loader" />;
      </div>
    );

  return (
    <div className={clsx('missions-page-render', className)}>
      <Flex gap="30px 15px" wrap="wrap" className="missions-page-render__missions-list">
        {missions.map((mission) => (
          <MissionTile className="missions-list__item" key={mission.id} mission={mission} />
        ))}
      </Flex>
    </div>
  );
};

type IProps = IComponent & {
  missions: IMissionNode[];
  isLoading: boolean;
};

export default MissionsPageRender;
