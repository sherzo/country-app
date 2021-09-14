import React from 'react';
import CountryItem from './CountryItem';

type CountryListProps = { countries: TCountry[]; loading: boolean };

export default function CountryList({ countries, loading }: CountryListProps) {
  return (
    <div className="flex flex-wrap overflow-hidden pb-4 lg:pb-4 lg:px-16">
      {countries.map(CountryItem)}
    </div>
  );
}
