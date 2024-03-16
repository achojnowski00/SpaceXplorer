import { gql } from '@apollo/client';
import { ICountryType } from 'src/core/ICountryType';

export const MISSION_DETAILS = gql`
  query Mission($launchId: ID!) {
    launch(id: $launchId) {
      __typename
      id
      launchDate: launch_date_utc
      name: mission_name
      isSuccess: launch_success
      details
      links {
        __typename
        images: flickr_images
        wikipedia
        video: video_link
        article: article_link
      }
      rocket {
        rockerNode: rocket {
          __typename
          name
          id
          country
          description
          boosters
        }
      }
    }
  }
`;

export type IMissionDetailsVariables = {
  launchId: string;
};

export type IMissionDetails = {
  launch: INode<'Launch'> & {
    launchDate: string;
    name: string;
    isSuccess: boolean;
    details: string;
    links: {
      __typename: 'LaunchLinks';
      images: string[];
      wikipedia?: string;
      video?: string;
      article?: string;
    };
    rocket: {
      rocketNode: INode<'Rocket'> & {
        name: string;
        country: ICountryType;
        description: string;
        boosters: number;
      };
    };
  };
};
