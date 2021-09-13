import React from 'react';
import CountryItem from './CountryItem';

export default function CountryList() {
  return (
    <div className="flex flex-wrap overflow-hidden pb-4 lg:pb-4 lg:px-10">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <CountryItem key={n} />
      ))}
    </div>
  );
}
