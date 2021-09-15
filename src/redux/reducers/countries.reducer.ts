import {
  SET_COUNTRIES,
  SET_COUNTRIES_FILTERS,
  FILTER_COUNTRIES_BY_NAME,
} from 'redux/types/countries.types';

const initialValue: TCountriesState = {
  countries: [],
  countriesByName: [],
  filters: {
    countryName: '',
    currency: '',
    continent: '',
  },
  filterQuery: {},
};

export const CountriesReducer = (
  state: TCountriesState = initialValue,
  action: { payload: any; type: string }
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
      const filterQuery: TFilterQuery = state.filterQuery;
      // @ts-ignore
      filterQuery[filterName] = {
        eq: value,
      };

      return {
        ...state,
        filters: {
          ...state.filters,
          [filterName]: value,
        },
        filterQuery,
      };
    }
    case FILTER_COUNTRIES_BY_NAME: {
      const countriesByName = state.countries.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        filters: {
          ...state.filters,
          countryName: action.payload,
        },
        countriesByName,
      };
    }
  }

  return state;
};
