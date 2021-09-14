import { createStore, combineReducers } from 'redux';

import { CountriesReducer } from 'redux/reducers/countries.reducer';

export const store = createStore<TRootState, any, any, any>(
  combineReducers({
    countries: CountriesReducer,
  })
);
