import React from 'react';

export default function CountryLoading() {
  return (
    <div className="w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4 px-8 pb-12">
      <div className="bg-white rounded-md shadow">
        <div className="bg-gray-200 h-44 rounded-t-md"></div>
        <div className="p-5">
          <div className="bg-gray-200 h-7 rounded-md"></div>
          <div className="bg-gray-200 mt-5 h-5 rounded-md w-40"></div>
          <div className="bg-gray-200 mt-3 h-5 rounded-md w-48"></div>
        </div>
      </div>
    </div>
  );
}
