import React from 'react';
import Filters from 'components/Filters';
import CountryList from 'components/CountryList';
import Layout from 'components/Layout';

export default function CountriesPage() {
  return (
    <Layout>
      <Filters />
      <CountryList />
    </Layout>
  );
}
