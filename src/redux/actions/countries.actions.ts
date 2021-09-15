import {
  FILTER_COUNTRIES_BY_NAME,
  SET_COUNTRIES,
  SET_COUNTRIES_FILTERS,
} from 'redux/types/countries.types';

export function setCountries(countries: TCountry[]) {
  const action = {
    type: SET_COUNTRIES,
    payload: countries,
  };

  return action;
}

export function setCountriesFilter(filterName: FilterTypes, value: string) {
  const action = {
    type: SET_COUNTRIES_FILTERS,
    payload: {
      filterName,
      value,
    },
  };

  return action;
}

export function filterCountriesByName(value: string) {
  const action = {
    type: FILTER_COUNTRIES_BY_NAME,
    payload: value,
  };

  return action;
}
