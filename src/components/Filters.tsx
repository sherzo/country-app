import React from 'react';

export default function Filters() {
  return (
    <div className="flex justify-between flex-col lg:flex-row relative my-4 mx-3 lg:my-5 lg:mx-12">
      <div className="lg:w-2/5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 absolute top-4 left-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          className="min-w-full py-3 pl-12 pr-6 border-b-1 shadow rounded-sm focus:border-transparent"
          placeholder="Search by country name"
        />
      </div>

      <div className="flex flex-col lg:w-2/6 lg:flex-row">
        <select
          placeholder="currency"
          className="shadow mr-8 min-w-full lg:min-w-min w-1/2 px-4 py-3 mt-2 lg:mt-0"
        >
          <option>EUROPA</option>
          <option>AMERICA LATINA</option>
          <option>ASIA</option>
        </select>
        <select
          placeholder="currency"
          className="shadow min-w-full lg:min-w-min w-1/2 px-4 py-3 mt-2 lg:mt-0"
        >
          <option>EUR</option>
          <option>$USD</option>
        </select>
      </div>
    </div>
  );
}
