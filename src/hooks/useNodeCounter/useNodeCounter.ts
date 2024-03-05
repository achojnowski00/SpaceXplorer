import { useQuery } from '@apollo/client';
import React from 'react';

import { MISSIONS_COUNT, IMissionCountQuery } from 'src/Api/MISSIONS';

export default function useNodeCounter(type: ICounterType) {
  const { data: missionsCountData, loading: isMissionsCountLoading } = useQuery<IMissionCountQuery>(
    MISSIONS_COUNT,
    {
      skip: type !== 'missions',
    },
  );

  const count = React.useMemo(() => {
    let result: number | undefined;

    switch (type) {
      case 'missions':
        result = missionsCountData?.launchesPast.length;
        break;
      default:
        result = undefined;
    }

    return result;
  }, [missionsCountData?.launchesPast.length, type]);

  return {
    count,
    isLoading: isMissionsCountLoading,
  };
}

type ICounterType = 'missions';
