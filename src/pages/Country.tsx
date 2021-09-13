import React from 'react';
import Header from 'components/Header';

export default function CountryPage() {
  return (
    <div>
      <Header />
      <div className="px-6 lg:px-16">
        <a
          href="/"
          className="bg-white flex items-center w-24 px-4 py-2 shadow mt-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="pl-2">Atras</span>
        </a>

        <div className="flex mt-12 flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
            <img
              src="./assets/img/bandera.png"
              alt="Bandera"
              className="rounded-t-sm"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <h1 className="text-3xl font-medium">Venezuela</h1>

            <p className="mt-3">
              <b>Native Name:</b> America
            </p>
            <p className="mt-3">
              <b>Code:</b> America
            </p>
            <p className="mt-3">
              <b>Currency:</b> Caracas
            </p>
            <p className="mt-3">
              <b>Capital:</b> Caracas
            </p>
            <p className="mt-3">
              <b>Languages:</b>
            </p>
            <div className="flex flex-wrap mt-4">
              {['es', 'en', 'it', 'fr'].map((lang) => (
                <LangItem lang={lang} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LangItem({ lang }: { lang: string }) {
  return (
    <div className="shadow bg-white px-4 py-2 mr-4 rounded-sm">{lang}</div>
  );
}
