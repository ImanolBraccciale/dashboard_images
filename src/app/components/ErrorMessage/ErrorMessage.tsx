import React from 'react';

const ErrorMessage = () => (
  <div className="bg-white p-4 shadow-md rounded-lg mb-4">
    <div className="text-red-600">Sorry, we couldn't load the results. Please try again later.</div>
    <button
      onClick={() => window.location.reload()}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Reload Page
    </button>
  </div>
);

export default ErrorMessage;
