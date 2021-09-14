type TCountry = {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  languagues: TLanguage[];
  continent: TContinent;
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
};

type TCountriesFilters = {
  countryName: string;
  currency: string;
  continent: string;
};

type TRootState = {
  countries: TCountriesState;
};
