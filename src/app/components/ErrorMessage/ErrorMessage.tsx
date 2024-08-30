 import React from 'react';

const ErrorMessage = () => (
  <div className="bg-white p-4 shadow-md rounded-lg mb-4">
     <div className="text-red-600">Lo sentimos, no pudimos cargar los resultados. Por favor, inténtelo de nuevo más tarde.</div>
    <button 
      onClick={() => window.location.reload()} 
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Recargar Página
    </button>
  </div>
);

export default ErrorMessage;
