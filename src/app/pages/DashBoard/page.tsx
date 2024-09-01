"use client";
import React, { useState } from 'react';
import Sidebar from '@/app/components/Dashboard/Sidebar';
import UploadImageModal from '@/app/components/Dashboard/UploadImageModal';
import { useDashboard } from '@/app/Hooks/useDashboard';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    isModalOpen,
    handleCloseModal,
    handleUploadSuccess,
    handleSidebarItemClick,
    renderMainContent,
  } = useDashboard();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        onItemSelect={handleSidebarItemClick}
        isOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
      />
      <main
        className={`flex-1 p-6 bg-gray-200 lg:ml-64`}
      >
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
