"use client";
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { uniqueResult, UploadImageModalProps } from '@/app/Hooks/DashBoard/Hooks';

 
const UploadImageModal: React.FC<UploadImageModalProps> = ({ isOpen, onRequestClose, onUploadSuccess }) => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [openOptions, setOpenOptions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //para cargar imagen
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      const url = URL.createObjectURL(event.target.files[0]);
      setImageUrl(url);
    }
  };

  //simula carga de 2 segundos y luego muestra resultados de la IA
  const handleSubmit = () => {
    if (image && selectedItem) {
      setIsLoading(true);
       setTimeout(() => {
          onUploadSuccess(uniqueResult);  
        setIsLoading(false);
        onRequestClose(); 
      }, 2000);  
    }
  };

  const handleItemSelect = (item: string) => {
    setSelectedItem(item);
    setOpenOptions(false); // Cierra el acordeón al seleccionar un ítem
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-4">
        <h3 className="text-xl font-semibold">Upload New Image</h3>
        <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onRequestClose}
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Image</label>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:mr-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-200 hover:file:bg-gray-300"
          />
        </div>

        {imageUrl && (
          <div className="mb-4 flex justify-center">
            <img
              src={imageUrl}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-md border border-gray-300"
            />
          </div>
        )}

        <div className="mb-4">
          <button
            className={`w-full text-left py-2 px-4 ${openOptions ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-200'} flex items-center justify-between`}
            onClick={() => setOpenOptions(!openOptions)}
            disabled={isLoading} // Desactiva el botón mientras se carga
          >
            {selectedItem || 'Seleccionar Ítem'}
            {openOptions ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </button>
          <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openOptions ? 'max-h-40' : 'max-h-0'}`}>
            <ul className="mt-2 border border-gray-300 rounded-lg">
              {['Gleason', 'KI67', 'Her2', 'Estrógeno', 'Progesterona'].map(item => (
                <li key={item}>
                  <button
                    className={`block w-full text-left py-2 px-4 hover:bg-gray-100 ${selectedItem === item ? 'bg-gray-200' : ''}`}
                    onClick={() => handleItemSelect(item)}
                    disabled={isLoading} // Desactiva los ítems mientras se carga
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10 rounded-lg">
            <div className="text-white font-semibold">
            <p>Uploading image...</p>
              <div className="mt-2 w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 animate-pulse" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={onRequestClose}
            disabled={isLoading} // Desactiva el botón de cancelar mientras se carga
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
            disabled={isLoading} // Desactiva el botón de enviar mientras se carga
          >
            {isLoading ? 'Uploading image...' : 'Upload Image'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadImageModal;
