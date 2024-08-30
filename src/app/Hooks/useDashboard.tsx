import { useState, useEffect } from 'react';
import CaseSummary from '../components/Dashboard/CaseSummary';
import QuickActions from '../components/Dashboard/QuickActions';
import ResultsSummary from '../components/Dashboard/ResultsSummary';
import { ResultItem } from './DashBoard/Hooks';
 //guardar handles,estados y mas para menor complegidad de codigo
export const useDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [uniqueResults, setUniqueResults] = useState<ResultItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null); 


  //peticion al "back" simulando atrapada de error,exceptuando estrogeno que se usara para demostrar loading
  const fetchResults = async () => {
    if (selectedItem !== 'Estrógeno') {
      setLoading(true);   
    }
    setError(null);     
  
    try {
      const response = await fetch('/simulatedResults.json');
      if (!response.ok) throw new Error('Error al obtener los resultados');
      
      const data: ResultItem[] = await response.json();
      setResults(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Error desconocido');
      } else {
        setError('Error desconocido');
      }
    } finally {
      if (selectedItem !== 'Estrógeno') {
        setLoading(false);   
      }
    }
  };
  
  
   useEffect(() => {
      fetchResults();
   
  }, [selectedItem]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUploadSuccess = (newResults: ResultItem) => {
    setUniqueResults(newResults);
    handleCloseModal();
  };

  const handleSidebarItemClick = (item: string) => {
    setSelectedItem(item);
    if (item === 'Estrógeno') {
      setLoading(true);
    } 
  };

  const handleDeleteResult = (id: string) => {
    setResults(results.filter(result => result.id !== id));
  };

  const handleUpdateResult = (updatedResult: ResultItem) => {
    setResults(results.map(result => 
      result.id === updatedResult.id ? updatedResult : result
    ));
  };

  const handleToggleVisibility = (id: string) => {
    setResults(results.map(result => 
      result.id === id ? { ...result, visible: !result.visible } : result
    ));
  };

  const renderMainContent = () => {
    
    if (selectedItem === 'results') {
      return (
        <ResultsSummary results={results}  />
      );
    }
    if (selectedItem === 'deletedResults') {
      const deletedResults = results.filter((result) => !result.visible);
      return <ResultsSummary results={deletedResults} visible={false} />;
    }

    if (selectedItem === 'DashBoard') {
      return (
        <>
          <h1 className="text-2xl font-bold mb-4">Panel de Control</h1>
          <h2 className="text-1xl font-bold mb-4">Resultados recientes</h2>
          <CaseSummary result={uniqueResults ?? undefined} />
          <QuickActions onOpenModal={handleOpenModal} />
        </>
      );
    }

    if (selectedItem) {
      const filteredResults = results.filter(result => result.IA_Type === selectedItem);
      return (
        <ResultsSummary results={filteredResults} loading={loading} />
      );
    }

    return (
      <>
        <h1 className="text-2xl font-bold mb-4">Panel de Control</h1>
        <h2 className="text-1xl font-bold mb-4">Resultados recientes</h2>
        <CaseSummary result={uniqueResults ?? undefined} />
        <QuickActions onOpenModal={handleOpenModal} />
      </>
    );
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleUploadSuccess,
    handleSidebarItemClick,
    handleDeleteResult,
    handleUpdateResult,
    handleToggleVisibility,
    renderMainContent,
  };
};
