type TCountry = {
  code: string;
  name: string;
  native: string;
  currency: string;
  phone: string;
  capital: string;
  languages: TLanguage[];
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
  in: Array<string>;
  nin: Array<string>;
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
