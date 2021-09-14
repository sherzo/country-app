import { SET_COUNTRIES } from 'redux/types/countries.types';

export function setCountries(countries: TCountry[]) {
  const action = {
    type: SET_COUNTRIES,
    payload: countries,
  };

  return action;
}
