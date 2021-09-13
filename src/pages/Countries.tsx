import React from 'react';
import Header from 'components/Header';
import Filters from 'components/Filters';
import CountryList from 'components/CountryList';

export default function CountriesPage() {
  return (
    <div>
      <Header />
      <Filters />
      <CountryList />
    </div>
  );
}
