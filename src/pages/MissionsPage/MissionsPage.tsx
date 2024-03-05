import { FC } from 'react';

import useApolloMissions from 'src/hooks/useApolloMissions/useApolloMissions';

import MissionsPageRender from './MissionsPageRender';

const MissionsPage: FC<IProps> = ({ className }) => {
  const { data, isLoading } = useApolloMissions();

  return (
    <MissionsPageRender
      isLoading={isLoading}
      className={className}
      missions={data?.launchesPast || []}
    />
  );
};

type IProps = IComponent;

export default MissionsPage;
