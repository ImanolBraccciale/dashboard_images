"use client";
import { QuickActionsProps } from '@/app/Hooks/DashBoard/Hooks';
import React from 'react';
//accion rapida que actualmente tiene  solamente Cargar imagen
const QuickActions: React.FC<QuickActionsProps> = ({ onOpenModal }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg max-w-lg mx-0">
      <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={onOpenModal}
      >
        Upload Image
      </button>
    </div>
  );
};

export default QuickActions;
