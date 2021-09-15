import React from 'react';
import CountryItem from './CountryItem';
import CountryLoading from './CountryLoading';

type CountryListProps = { countries: TCountry[]; loading: boolean };

export default function CountryList({ countries, loading }: CountryListProps) {
  if (loading) {
    return (
      <div className="flex flex-wrap overflow-hidden pb-4 lg:pb-4 lg:px-16">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <CountryLoading key={n} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap overflow-hidden pb-4 lg:pb-4 lg:px-16">
      {countries.map(CountryItem)}
    </div>
  );
}
