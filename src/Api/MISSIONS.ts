import { gql } from '@apollo/client';
import { ICountryType } from 'src/core/ICountryType';

export const MISSIONS = gql`
  query Missions($queryOffset: Int!, $queryLimit: Int!) {
    launchesPast(offset: $queryOffset, limit: $queryLimit) {
      __typename
      id
      launchDate: launch_date_utc
      name: mission_name
      links {
        __typename
        images: flickr_images
      }
      rocket {
        rockerNode: rocket {
          __typename
          id
          name
          country
        }
      }
    }
  }
`;

export type IMissionsVariables = {
  queryOffset: number;
  queryLimit: number;
};

export type IMissionNode = INode<'Launch'> & {
  launchDate: string;
  name: string;
  links: {
    __typename: 'LaunchLinks';
    images: string[];
  };
  rocket: {
    rockerNode: INode<'Rocket'> & {
      name: string;
      country: ICountryType;
    };
  };
};

export type IMissionQuery = {
  launchesPast: IMissionNode[];
};

export const MISSIONS_COUNT = gql`
  query MissionsCount {
    launchesPast {
      __typename
      id
    }
  }
`;

export type IMissionCountQuery = {
  launchesPast: Array<INode<'Launch'>>;
};
