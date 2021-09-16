import React from 'react';
import Layout from 'components/Layout';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from 'grahpql/getCountry.query';

export default function CountryPage() {
  const { code } = useParams<{ code: string }>();
  const { loading, data } = useQuery(GET_COUNTRY, {
    variables: {
      code,
    },
  });
  console.log('data', data);
  const country: TCountry = data?.country;

  if (loading) {
    return null;
  }

  return (
    <Layout>
      <div className="px-6 lg:px-16 pb-8">
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
          <span className="pl-2">Go back</span>
        </a>

        <div className="flex mt-12 flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
            <img
              src={`https://flagcdn.com/h240/${code.toLowerCase()}.png`}
              alt="Bandera"
              className="h-40 lg:h-96 object-cover min-w-full"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <h1 className="text-2xl lg:text-3xl font-medium">{country.name}</h1>

            <p className="mt-3">
              <b>Native Name:</b> {country.native}
            </p>
            <p className="mt-3">
              <b>Code:</b> {country.code}
            </p>
            <p className="mt-3">
              <b>Currency:</b> {country.currency}
            </p>
            <p className="mt-3">
              <b>Capital:</b> {country.capital}
            </p>
            <p className="mt-3">
              <b>Languages:</b>
            </p>
            <div className="flex flex-wrap mt-4">
              {country.languages.map(LangItem)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function LangItem({ code, name }: TLanguage) {
  return (
    <div className="shadow bg-white px-4 py-2 mr-4 rounded-sm">{name}</div>
  );
}
