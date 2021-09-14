import React from 'react';
import SearchBar from 'components/SearchBar';
import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from 'grahpql';
import { useDispatch } from 'react-redux';
import { setCountriesFilter } from 'redux/actions/countries.actions';

enum FilterTypes {
  CURRENCY = 'currency',
  COUNTRY_NAME = 'countryName',
  CONTINENT = 'continent',
}

type FiltersProp = TCountriesFilters;

export default function Filters({
  countryName,
  currency,
  continent,
}: FiltersProp) {
  const { data } = useQuery(GET_CONTINENTS);
  const { continents } = data ?? { continents: [] };
  const dispatch = useDispatch();

  const onChange =
    (filterName: FilterTypes) =>
    (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      dispatch(setCountriesFilter(filterName, e.target.value));
    };

  return (
    <div className="flex justify-between flex-col lg:flex-row relative my-5 mx-6 lg:my-10 lg:mx-24">
      <SearchBar
        value={countryName}
        onChange={onChange(FilterTypes.COUNTRY_NAME)}
      />

      <div className="flex flex-col lg:w-2/6 lg:flex-row">
        <select
          value={continent}
          onChange={onChange(FilterTypes.CONTINENT)}
          className="shadow mr-8 min-w-full lg:min-w-min w-1/2 px-4 py-3 mt-2 lg:mt-0"
        >
          <option value="">Continents</option>
          {continents?.map((continent: TContinent) => (
            <option key={continent.code} value={continent.code}>
              {continent.name}
            </option>
          ))}
        </select>
        <input
          value={currency}
          onChange={onChange(FilterTypes.CURRENCY)}
          placeholder="Currency"
          className="shadow min-w-full lg:min-w-min w-1/2 px-4 py-3 mt-2 lg:mt-0"
        />
      </div>
    </div>
  );
}
