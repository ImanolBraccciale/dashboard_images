"use client";
import Sidebar from '@/app/components/Dashboard/Sidebar';
import UploadImageModal from '@/app/components/Dashboard/UploadImageModal';
import { useDashboard } from '@/app/Hooks/useDashboard';
import React from 'react';

const Dashboard: React.FC = () => {
  const {
    isModalOpen,
    handleCloseModal,
    handleUploadSuccess,
    handleSidebarItemClick,
    renderMainContent,
  } = useDashboard();

  return (
    <div className="flex min-h-screen">
      <Sidebar onItemSelect={handleSidebarItemClick} />
      <main className="flex-1 p-6 bg-gray-100">
        {renderMainContent()}
        <UploadImageModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          onUploadSuccess={handleUploadSuccess}
        />
      </main>
    </div>
  );
};

export default Dashboard;
