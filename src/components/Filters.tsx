import React from 'react';
import SearchBar from 'components/SearchBar';

export default function Filters() {
  return (
    <div className="flex justify-between flex-col lg:flex-row relative m-5 lg:my-10 lg:mx-16">
      <SearchBar />

      <div className="flex flex-col lg:w-2/6 lg:flex-row">
        <select
          placeholder="currency"
          className="shadow mr-8 min-w-full lg:min-w-min w-1/2 px-4 py-3 mt-2 lg:mt-0"
        >
          <option>EUROPA</option>
          <option>AMERICA LATINA</option>
          <option>ASIA</option>
        </select>
        <select
          placeholder="currency"
          className="shadow min-w-full lg:min-w-min w-1/2 px-4 py-3 mt-2 lg:mt-0"
        >
          <option>EUR</option>
          <option>$USD</option>
        </select>
      </div>
    </div>
  );
}
