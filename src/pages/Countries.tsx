import React, { useState, useEffect } from 'react';
import Filters from 'components/Filters';
import CountryList from 'components/CountryList';
import Layout from 'components/Layout';
import { gql, useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from 'redux/actions/countries.actions';

const EXCHANGE_RATES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
      continent {
        name
      }
    }
  }
`;

export default function CountriesPage() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const dispatch = useDispatch();
  const { countries, filters } = useSelector(
    (state: TRootState) => state.countries
  );

  useEffect(() => {
    dispatch(setCountries(data?.countries ?? []));
  }, [data]);

  if (error) {
    return null;
  }

  return (
    <Layout>
      <Filters {...filters} />
      <CountryList countries={countries} loading={loading} />
    </Layout>
  );
}
