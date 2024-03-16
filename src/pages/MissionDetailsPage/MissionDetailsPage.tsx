import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import useApolloMissionDetails from 'src/hooks/useApolloMissionDetails';

import MissionDetailsPageRender from './MissionDetailsPageRender';
import Loader from 'src/components/Loader';

import { IMissionDetails } from 'src/Api/MISSION_DETAILS';

import './mission-details.scss';

const MissionDetailsPage: FC<IProps> = ({}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const { missionId } = useParams();

  const { data, isLoading, error } = useApolloMissionDetails(missionId as string, !missionId);

  const handleSelectPhoto = (index: number) => {
    setSelectedImageIndex(index);
  };

  if (isLoading) return <Loader />;

  // TODO: Add `something went wrong` view
  if ((!data && !isLoading) || !!error) return <>Something went wrong</>;

  return (
    <MissionDetailsPageRender
      missionData={data as IMissionDetails}
      selectedImageIndex={selectedImageIndex}
      onSelectPhoto={handleSelectPhoto}
    />
  );
};

type IProps = IComponent;

export default MissionDetailsPage;
