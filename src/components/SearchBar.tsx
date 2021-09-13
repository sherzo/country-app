import React from 'react';

export default function SearchBar() {
  return (
    <div className="lg:w-2/5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 absolute top-4 left-5 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        className="min-w-full py-3 pl-12 pr-6 border-b-1 shadow rounded-sm focus:border-transparent"
        placeholder="Search by country name"
      />
    </div>
  );
}
