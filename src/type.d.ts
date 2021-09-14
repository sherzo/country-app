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
