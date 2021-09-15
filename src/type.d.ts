type TCountry = {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  languagues: TLanguage[];
  continent: TContinent;
  currency: string;
};

type TLanguage = {
  code: string;
  name: string;
};

type TContinent = {
  code: string;
  name: string;
};

type TCountriesState = {
  countries: TCountry[];
  filters: TCountriesFilters;
  countriesByName: TCountry[];
  filterQuery: TFilterQuery;
};

type TFilterQuery = {
  currency?: TStringQueryOperator;
  continent?: TStringQueryOperator;
};

type TStringQueryOperator = {
  eq: string;
  ne: string;
  in: string;
  nin: string;
  regex: string;
  glob: string;
};

type TCountriesFilters = {
  countryName: string;
  currency: string;
  continent: string;
};

type TRootState = {
  countries: TCountriesState;
};

enum FilterTypes {
  CURRENCY = 'currency',
  COUNTRY_NAME = 'countryName',
  CONTINENT = 'continent',
}
