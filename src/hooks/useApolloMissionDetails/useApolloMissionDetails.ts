import { useQuery } from '@apollo/client';

import {
  MISSION_DETAILS,
  IMissionDetailsVariables,
  IMissionDetails,
} from 'src/Api/MISSION_DETAILS';

export default function useApolloMissionDetails(launchId: string, skip?: boolean) {
  const {
    data,
    loading: isLoading,
    error,
  } = useQuery<IMissionDetails, IMissionDetailsVariables>(MISSION_DETAILS, {
    skip,
    variables: {
      launchId,
    },
  });

  return {
    data,
    isLoading,
    error,
  };
}
