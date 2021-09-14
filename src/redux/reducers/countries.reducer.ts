import {
  SET_COUNTRIES,
  SET_COUNTRIES_FILTERS,
} from 'redux/types/countries.types';

const InitialValue: TCountriesState = {
  countries: [],
  countriesByName: [],
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
    case SET_COUNTRIES_FILTERS: {
      const { filterName, value } = action.payload;

      const countriesByName = state.countries.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
      );

      return {
        ...state,
        countriesByName,
        filters: {
          ...state.filters,
          [filterName]: value,
        },
      };
    }
  }

  return state;
};
