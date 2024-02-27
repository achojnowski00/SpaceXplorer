import { gql } from '@apollo/client';

export const TestQuery = gql`
  query test {
    company {
      __typename
      name
    }
  }
`;

export type ITestQuery = {
  company: {
    __typename: string;
    name: string;
  };
};
