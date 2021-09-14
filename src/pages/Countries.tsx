import React, { useEffect } from 'react';
import Filters from 'components/Filters';
import CountryList from 'components/CountryList';
import Layout from 'components/Layout';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from 'redux/actions/countries.actions';
import { GET_COUNTRIES } from 'grahpql';

export default function CountriesPage() {
  const dispatch = useDispatch();
  const { countries, filters, countriesByName } = useSelector(
    (state: TRootState) => state.countries
  );
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  useEffect(() => {
    dispatch(setCountries(data?.countries ?? []));
  }, [data, dispatch]);

  if (error) {
    return null;
  }

  return (
    <Layout>
      <Filters {...filters} />
      <CountryList
        countries={filters.countryName.length > 0 ? countriesByName : countries}
        loading={loading}
      />
    </Layout>
  );
}
