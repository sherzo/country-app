import { gql } from '@apollo/client';

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      currency
      capital
      continent {
        name
      }
      languages {
        code
        name
      }
    }
  }
`;
