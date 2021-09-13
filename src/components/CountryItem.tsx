import React from 'react';

export default function CountryItem() {
  return (
    <a
      href="/asd"
      className="w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4 px-6 pb-6"
    >
      <div className="bg-white rounded-md shadow-sm">
        <img
          src="./assets/img/bandera.png"
          alt="Bandera"
          className="rounded-t-sm"
        />
        <div className="p-5">
          <h3 className="text-xl font-medium">Venezuela</h3>
          <p className="mt-3">
            <b>Continent: </b> America
          </p>
          <p className="mt-3">
            <b>Capital: </b> Caracas
          </p>
        </div>
      </div>
    </a>
  );
}
