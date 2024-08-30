import React from 'react';
import ImageMagnifier from '../../utils/ImageMagnifier';
import { ResultItemCardProps } from '@/app/Hooks/DashBoard/Hooks';
  
 //componente general de una card
const ResultItemCard: React.FC<ResultItemCardProps> = ({ result, onEditClick, onHideClick }) => (
  <div className="w-1/3 mb-4 p-2 border border-gray-200 rounded-lg">
    <h4 className="text-md font-semibold mb-2">{result.IA_Type}</h4>
    <div className="flex justify-between mt-3">
      <div className="w-1/2 pr-2">
        <h4 className="text-md font-semibold mb-2">Imagen Original</h4>
        <ImageMagnifier src={result.originalImageUrl} />
      </div>
      <div className="w-1/2 pl-2">
        <h4 className="text-md font-semibold mb-2">Imagen IA</h4>
        <ImageMagnifier src={result.processedImageUrl} />
      </div>
    </div>
    <p><strong>IA Total Cells:</strong> {result.IATotalCells}</p>
    <p><strong>IA Positive Cells:</strong> {result.IAPositiveCells}</p>
    <p><strong>IA Negative Cells:</strong> {result.IANegativeCells}</p>
    <p><strong>Total Cells:</strong> {result.TotalCells}</p>
    <p><strong>Positive Cells:</strong> {result.PositiveCells}</p>
    <p><strong>Negative Cells:</strong> {result.NegativeCells}</p>
    <p><strong>Wrong Total Cells:</strong> {result.WrongTotalCells}</p>
    <p><strong>Wrong Positive Cells:</strong> {result.WrongPositiveCells}</p>
    <p><strong>Wrong Negative Cells:</strong> {result.WrongNegativeCells}</p>
    <button
      onClick={() => onEditClick(result)}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Editar
    </button>
    <button
      onClick={() => onHideClick(result.id)}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Ocultar
    </button>
  </div>
);

export default ResultItemCard;
