"use client"
// app/page.tsx
import React, { useState } from 'react';
import LoginModal from './components/LoginModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
  
      <LoginModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
