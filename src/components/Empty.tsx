import React from 'react';

export default function Empty() {
  return (
    <div className="min-w-full my-10 lg:my-28 flex items-center flex-col text-gray-300">
      <p className="text-center text-3xl text-gray-300 mb-8">
        No se encontraron resultados
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14 lg:h-20 lg:w-20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
