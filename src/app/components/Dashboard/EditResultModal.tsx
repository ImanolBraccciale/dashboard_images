"use client";
import React, { useState } from 'react';
import { EditResultModalProps } from '@/app/Hooks/DashBoard/Hooks';

const EditResultModal: React.FC<EditResultModalProps> = ({
  result,
  isOpen,
  onRequestClose,
  onUpdate,
}) => {

  //como no hay back,simulo una actualización trabajando con los Estados
  const [formData, setFormData] = useState({
    WrongTotalCells: result?.WrongTotalCells || 0,
    WrongPositiveCells: result?.WrongPositiveCells || 0,
    WrongNegativeCells: result?.WrongNegativeCells || 0,
    visible: result?.visible || false,
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : parseInt(value, 10) || 0
    }));
  };
  // pasar los resultados completo
  const handleSave = () => {
    if (result) {
      const updatedResult = {
        ...result,
        ...formData
      };
      onUpdate(updatedResult);
    }
    onRequestClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onRequestClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onRequestClose}
        >
          X
        </button>
        <h3 className="text-lg font-semibold mb-4">Edit Result</h3>
        <div className="mb-4">
          <label className="block mb-1">
            Wrong Total Cells:
            <input
              type="number"
              name="WrongTotalCells"
              value={formData.WrongTotalCells}
              onChange={handleChange}
              className="border ml-2 p-1 rounded w-full"
            />
          </label>
          <label className="block mb-1">
            Wrong Positive Cells:
            <input
              type="number"
              name="WrongPositiveCells"
              value={formData.WrongPositiveCells}
              onChange={handleChange}
              className="border ml-2 p-1 rounded w-full"
            />
          </label>
          <label className="block mb-1">
            Wrong Negative Cells:
            <input
              type="number"
              name="WrongNegativeCells"
              value={formData.WrongNegativeCells}
              onChange={handleChange}
              className="border ml-2 p-1 rounded w-full"
            />
          </label>

        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Accept
          </button>
          <button
            onClick={onRequestClose}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditResultModal;
