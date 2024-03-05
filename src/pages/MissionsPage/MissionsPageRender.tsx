import { FC } from 'react';
import clsx from 'clsx';

import Flex from 'src/components/Flex';
import MissionTile from './items/MissionTile';
import Loader from 'src/components/Loader';
import PaginationLayout from 'src/components/Layouts/PaginationLayout';

import { IMissionNode } from 'src/Api/MISSIONS';
import { IUsePagination } from 'src/hooks/usePagination/usePagination';

import './missions-page.scss';

const MissionsPageRender: FC<IProps> = ({ className, missions, isLoading, pagination }) => {
  if (isLoading)
    return (
      <div className={clsx('missions-page-render', className)}>
        <Loader className="missions-page-render__loader" />;
      </div>
    );

  return (
    <PaginationLayout pagination={pagination}>
      <div className={clsx('missions-page-render', className)}>
        <Flex gap="30px 15px" wrap="wrap" className="missions-page-render__missions-list">
          {missions.map((mission) => (
            <MissionTile className="missions-list__item" key={mission.id} mission={mission} />
          ))}
        </Flex>
      </div>
    </PaginationLayout>
  );
};

type IProps = IComponent & {
  missions: IMissionNode[];
  isLoading: boolean;
  pagination: IUsePagination;
};

export default MissionsPageRender;
