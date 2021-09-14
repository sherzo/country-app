import { SET_COUNTRIES } from 'redux/types/countries.types';

const InitialValue: TCountriesState = {
  countries: [],
  filters: {
    countryName: '',
    currency: '',
    continent: '',
  },
};

export const CountriesReducer = (
  state: TCountriesState = InitialValue,
  action: any
): TCountriesState => {
  switch (action.type) {
    case SET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
  }

  return state;
};
