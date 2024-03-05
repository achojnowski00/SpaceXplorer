import { useQuery } from '@apollo/client';

import { MISSIONS, IMissionsVariables, IMissionQuery } from 'src/Api/MISSIONS';

import useNodeCounter from '../useNodeCounter/useNodeCounter';
import usePagination from '../usePagination';

export default function useApolloMissions() {
  const { count, isLoading: isMissionsCountLoading } = useNodeCounter('missions');

  const pagination = usePagination({ itemsCount: count });
  const { queryLimit, queryOffset } = pagination;

  const { data, loading: isMissionsDataLoading } = useQuery<IMissionQuery, IMissionsVariables>(
    MISSIONS,
    {
      variables: {
        queryLimit,
        queryOffset,
      },
    },
  );

  return {
    data,
    pagination,
    isLoading: isMissionsCountLoading || isMissionsDataLoading,
  };
}
