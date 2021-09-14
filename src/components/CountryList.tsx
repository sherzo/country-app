import React, { useState, useEffect } from 'react';
import CountryItem from './CountryItem';
import { gql, useQuery } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
      continent {
        name
      }
    }
  }
`;

export default function CountryList() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(data?.countries ?? []);
  }, [data]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return null;
  }

  return (
    <div className="flex flex-wrap overflow-hidden pb-4 lg:pb-4 lg:px-10">
      {countries.map(CountryItem)}
    </div>
  );
}
