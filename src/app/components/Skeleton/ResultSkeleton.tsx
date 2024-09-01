import React from 'react';

const Skeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-gap-y-6 mb-3">
    {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="p-8 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col space-y-6">
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>

        <div className="flex flex-col lg:flex-row lg:space-x-8 mb-4">
          <div className="flex-1">
            <div className="h-4 bg-gray-300 mb-4 rounded w-1/3"></div>
            <div className="bg-gray-300 rounded" style={{ width: '150px', height: '150px' }}></div>
            <div className="space-y-2 mt-4">
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
            
            </div>
          </div>
          <div className="flex-1">
            <div className="h-4 bg-gray-300 mb-4 rounded w-1/3"></div>
            <div className="bg-gray-300 rounded" style={{ width: '150px', height: '150px' }}></div>
            <div className="space-y-2 mt-4">
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
              <div className="h-3 bg-gray-300 rounded" style={{ width: '100px' }}></div>
            </div>
          </div>
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
