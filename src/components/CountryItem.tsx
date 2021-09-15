import React from 'react';

export default function CountryItem({
  code,
  name,
  capital,
  continent,
  currency,
}: TCountry) {
  return (
    <a
      href={`/country/${code.toLowerCase()}`}
      className="w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4 px-8 pb-12"
      key={code}
    >
      <div className="bg-white rounded-md shadow">
        <img
          src={`https://flagcdn.com/h240/${code.toLowerCase()}.png`}
          alt="Bandera"
          className="h-40 object-cover min-w-full rounded-t-md"
        />
        <div className="p-5">
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="mt-3">
            <b>Capital: </b> {capital}
          </p>
          <p className="mt-3">
            <b>Continent: </b> {continent.name}
          </p>
          <p className="mt-3">
            <b>Currency: </b> {currency}
          </p>
        </div>
      </div>
    </a>
  );
}
