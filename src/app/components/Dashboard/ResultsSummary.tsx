"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { ResultItem, ResultsSummaryProps } from '@/app/Hooks/DashBoard/Hooks';
import EditResultModal from './EditResultModal';
import ResultItemCard from './ResultItemCard';
import LoadingState from './LoadingState';

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ visible =true, results, loading }) => {
  const [filteredResults, setFilteredResults] = useState<ResultItem[]>([]);
  const [selectedResult, setSelectedResult] = useState<ResultItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  // Actualiza los resultados cuando cambien los props
  useEffect(() => {
    setFilteredResults(results.filter(result => result.visible === visible));
  }, [results, visible]);

  //esto es para que se pueda observar el loading por 3 seg
   useEffect(() => {
    if (loading) {
      const errorTimer = setTimeout(() => {
        setShowError(true);
      }, 4000);

      return () => clearTimeout(errorTimer);
    } else {
      setShowError(false);
    }
  }, [loading]);


  //manejadores para los diversos eventos
  const handleEditClick = useCallback((result: ResultItem) => {
    setSelectedResult(result);
    setIsModalOpen(true);
  }, []);

  const handleUpdate = useCallback((updatedResult: ResultItem) => {
    setFilteredResults(prevResults =>
      prevResults.map(r => (r.id === updatedResult.id ? updatedResult : r))
    );
    setSelectedResult(null);
    setIsModalOpen(false);
  }, []);

  const handleRequestClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedResult(null);
  }, []);

  const handleHideClick = useCallback((id: string) => {
    setFilteredResults(prevResults =>
      prevResults.map(result =>
        result.id === id ? { ...result, visible: !result.visible } : result
      )
    );
  }, []);

  // Verifica si el objeto enviado por props está vacio
  const noResultsMessage = filteredResults.length === 0 && !loading && (
    <p className="text-red-500">No se ha hecho ningún análisis.</p>
  );

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">Resultados de la IA</h3>
      {loading ? (
        <LoadingState showError={showError} />
      ) : (
        <div>
          {noResultsMessage}
          <div className="flex flex-wrap justify-between">
            {filteredResults.map(result => (
              <ResultItemCard
                key={result.id}
                result={result}
                onEditClick={handleEditClick}
                onHideClick={handleHideClick}
              />
            ))}
          </div>
        </div>
      )}
      {selectedResult && (
        <EditResultModal
          result={selectedResult}
          isOpen={isModalOpen}
          onRequestClose={handleRequestClose}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ResultsSummary;
