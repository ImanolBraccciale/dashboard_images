import React from 'react';
import Skeleton from '../Skeleton/ResultSkeleton'; // Asegúrate de que el path sea correcto
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { LoadingStateProps } from '@/app/Hooks/DashBoard/Hooks';

 //simula un skeleton de carga o error

const LoadingState: React.FC<LoadingStateProps> = ({ showError }) => (
  <div className="w-full">
    {showError ? <ErrorMessage /> : <Skeleton />}
  </div>
);

export default LoadingState;
