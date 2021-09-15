import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      capital
      currency
      continent {
        name
      }
    }
  }
`;
