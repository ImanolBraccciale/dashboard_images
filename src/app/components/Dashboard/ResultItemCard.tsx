import React from 'react';
import ImageMagnifier from '../../utils/ImageMagnifier';
import { ResultItemCardProps } from '@/app/Hooks/DashBoard/Hooks';

const ResultItemCard: React.FC<ResultItemCardProps> = ({ result, onEditClick, onHideClick }) => (
  <div className="flex justify-center items-center min-h-full">
    <div className="w-full max-w-3xl min-w-[300px] border border-gray-300 rounded-lg shadow-sm bg-white p-6">
      <h4 className="text-lg font-semibold mb-4 text-center">{result.IA_Type}</h4>
      <div>
        <div className="flex flex-col lg:flex-row gap-6 mb-4">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start w-full">  
            <h4 className="text-md font-semibold mb-2 text-center lg:text-left">Original Image</h4>
            <div className="flex justify-center lg:justify-start w-full">  
              <ImageMagnifier src={result.originalImageUrl} />
            </div>
            <p className="mt-2 text-center lg:text-left"><strong>Total Cells:</strong> {result.TotalCells}</p>
            <p className="text-center lg:text-left"><strong>Positive Cells:</strong> {result.PositiveCells}</p>
            <p className="text-center lg:text-left"><strong>Negative Cells:</strong> {result.NegativeCells}</p>
          </div>
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start w-full">  
            <h4 className="text-md font-semibold mb-2 text-center lg:text-left">Imagen IA</h4>
            <div className="flex justify-center lg:justify-start w-full">  
              <ImageMagnifier src={result.processedImageUrl} />
            </div>
            <p className="mt-2 text-center lg:text-left"><strong>IA Total Cells:</strong> {result.IATotalCells}</p>
            <p className="text-center lg:text-left"><strong>IA start Cells:</strong> {result.IAPositiveCells}</p>
            <p className="text-center lg:text-left"><strong>IA Negative Cells:</strong> {result.IANegativeCells}</p>
            <p className="text-center lg:text-left"><strong>Wrong Total Cells:</strong> {result.WrongTotalCells}</p>
            <p className="text-center lg:text-left"><strong>Wrong Positive Cells:</strong> {result.WrongPositiveCells}</p>
            <p className="text-center lg:text-left"><strong>Wrong Negative Cells:</strong> {result.WrongNegativeCells}</p>
           </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => onEditClick(result)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Editar
        </button>
        <button
          onClick={() => onHideClick(result.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Borrar
        </button>
      </div>
    </div>
  </div>
);

export default ResultItemCard;
