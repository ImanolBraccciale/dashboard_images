import React from 'react';

const Skeleton = () => (
  <div className="flex flex-wrap justify-between">
    {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="w-1/3 mb-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
         <div className="h-6 bg-gray-300 mb-4 rounded w-1/4"></div>

         <div className="flex mb-4">

          <div className="w-1/2 pr-2">
            <div className="h-4 bg-gray-300 mb-4 rounded w-1/3"></div>

            <div className="bg-gray-300 rounded" style={{ width: '150px', height: '150px' }}></div>
          </div>
          <div className="w-1/2 pl-2">
            <div className="h-4 bg-gray-300 mb-4 rounded w-1/3"></div>

            <div className="bg-gray-300 rounded" style={{ width: '150px', height: '150px' }}></div>
          </div>
        </div>

         <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
          <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
          <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
          <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
          <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
          <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
          <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
          <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
          <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
          <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
        </div>

         <div className="flex justify-start space-x-4 mt-4">
          <div className="w-16 h-8 bg-gray-300 rounded"></div>
          <div className="w-16 h-8 bg-gray-300 rounded"></div>
        </div>
      </div>
    ))}
  </div>
);

export default Skeleton;
