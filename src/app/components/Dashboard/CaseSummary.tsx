"use client";
import React from 'react';
import ImageMagnifier from '../../utils/ImageMagnifier';
import { CaseSummaryProps } from '@/app/Hooks/DashBoard/Hooks';

const CaseSummary: React.FC<CaseSummaryProps> = ({ result }) => {
  if (!result) return <p>No results available.</p>;

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4 max-w-3xl mx-0">
      <h3 className="text-lg font-semibold mb-2">Resultados </h3>

      <div key={result.id} className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex justify-between mt-3">
          <div className="w-1/2 pr-2">
            <h4 className="text-md font-semibold mb-2">Original Image</h4>
            <ImageMagnifier src={result.originalImageUrl} />
          </div>
          <div className="w-1/2 pl-2">
            <h4 className="text-md font-semibold mb-2">IA Image</h4>
            <ImageMagnifier src={result.processedImageUrl} />
          </div>
        </div>
        <div>
          <p><strong>AI Type:</strong> {result.IA_Type}</p>
          <p><strong>IA Total Cells:</strong> {result.IATotalCells}</p>
          <p><strong>IA Positive Cells:</strong> {result.IAPositiveCells}</p>
          <p><strong>IA Negative Cells:</strong> {result.IANegativeCells}</p>
          <p><strong>Total Cells:</strong> {result.TotalCells}</p>
          <p><strong>Positive Cells:</strong> {result.PositiveCells}</p>
          <p><strong>Negative Cells:</strong> {result.NegativeCells}</p>
          <p><strong>Wrong Total Cells:</strong> {result.WrongTotalCells}</p>
          <p><strong>Wrong Positive Cells:</strong> {result.WrongPositiveCells}</p>
          <p><strong>Wrong Negative Cells:</strong> {result.WrongNegativeCells}</p>
        </div>

      </div>

    </div>
  );
};

export default CaseSummary;
