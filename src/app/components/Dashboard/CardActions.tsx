// components/Dashboard/CardActions.tsx
import React from 'react';

interface CardActionsProps {
  onDelete: () => void;
  onUpdate: () => void;
}

const CardActions: React.FC<CardActionsProps> = ({ onDelete, onUpdate }) => {
  return (
    <div className="mt-4 flex justify-between">
      <button 
        onClick={onDelete} 
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
      >
        Eliminar
      </button>
      <button 
        onClick={onUpdate} 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Actualizar
      </button>
    </div>
  );
};

export default CardActions;
