"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { ResultItem, ResultsSummaryProps } from '@/app/Hooks/DashBoard/Hooks';
import EditResultModal from './EditResultModal';
import ResultItemCard from './ResultItemCard';
import LoadingState from './LoadingState';

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ visible = true, results, loading }) => {
   const [selectedResult, setSelectedResult] = useState<ResultItem | null>(null);
   const [filteredResults, setFilteredResults] = useState<ResultItem[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showError, setShowError] = useState(false);
 
  useEffect(() => {
    const updatedResults = results.filter(result => result.visible === visible);
    setFilteredResults(updatedResults);
  }, [results, visible]);

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

  const handleEditClick = useCallback((result: ResultItem) => {
    setSelectedResult(result);
    setIsModalOpen(true);
  }, []);

  const handleUpdate = useCallback((updatedResult: ResultItem) => {
    setFilteredResults(prevResults =>
      prevResults.map(r =>
        r.id === updatedResult.id ? updatedResult : r
      )
    );
    setSelectedResult(null);
    setIsModalOpen(false);
  }, []);

  const handleRequestClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedResult(null);
  }, []);


  const handleHideClick = useCallback((id: string) => {
    setFilteredResults(prevResults => {
      const updatedResults = prevResults.map(result =>
        result.id === id ? { ...result, visible: !result.visible } : result
      );
      const newFilteredResults = updatedResults.filter(result => result.visible === visible);
      return newFilteredResults;
    });
  }, [visible]);

  const noResultsMessage = filteredResults.length === 0 && !loading && (
    <p className="text-red-500 text-center">No results available.</p>
  );

  return (
    <div className="bg-gray-100 min-w-[350px] p-6 shadow-md rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-4">AI Results</h3>
      {loading ? (
        <LoadingState showError={showError} />
      ) : (
        <div>
          {noResultsMessage}
          <div className="grid-container gap-6">
            {filteredResults.map(result => (
              <div key={result.id} className="flex justify-center">
                <div className="w-full min-w-[350px]">
                  <ResultItemCard
                    result={result}
                    onEditClick={handleEditClick}
                    onHideClick={() => handleHideClick(result.id)}
                  />
                </div>
              </div>
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
