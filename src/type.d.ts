type Country = {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  languagues: Language[];
  continent: Continent;
};

type Language = {
  code: string;
  name: string;
};

type Continent = {
  code: string;
  name: string;
};
