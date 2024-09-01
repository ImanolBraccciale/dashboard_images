"use client";
import React, { useState } from 'react';
import { ArrowLeftStartOnRectangleIcon, Bars2Icon, ChevronDownIcon, ChevronUpIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { SidebarProps } from '@/app/Hooks/DashBoard/Hooks';
import { useRouter } from 'next/navigation';

const Sidebar: React.FC<SidebarProps & { isOpen: boolean; onToggleSidebar: () => void; }> = ({ onItemSelect, isOpen, onToggleSidebar }) => {
  const [openProstate, setOpenProstate] = useState(false);
  const [openBreast, setOpenBreast] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const router = useRouter(); // Usa useRouter para redireccionar

  const handleLogout = () => {
    router.push('/');  
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onItemSelect(item);
    if (isOpen) {
      onToggleSidebar(); 
    }
  };

  const isSelected = (item: string) => selectedItem === item;

  return (
    <div>
      {/* Botón para alternar el Sidebar en pantallas pequeñas */}
      <div className="lg:hidden fixed top-0 right-0 z-1300 p-4">
        <button
          onClick={onToggleSidebar}
          className="text-white bg-gray-800 p-2 rounded"
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars2Icon className="h-6 w-6" />}
        </button>
      </div>

       <div style={{ zIndex: 1200 }} className={`fixed top-0 left-0 w-64 bg-gray-800 text-white flex flex-col min-h-screen transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-64`}>
        <div className="p-4 text-xl font-bold">Dashboard</div>
        <nav className="flex-1 p-4">
          <ul>
            <li>
              <a
                href="/"
                className={`block py-2 px-4 hover:bg-gray-700 ${isSelected('Inicio') ? 'bg-gray-600' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 hover:bg-gray-700 ${isSelected('DashBoard') ? 'bg-gray-600' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick('DashBoard');
                }}
              >
                Profile
                </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 hover:bg-gray-700 ${isSelected('results') ? 'bg-gray-600' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick('results');
                }}
              >
                Results
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 hover:bg-gray-700 ${isSelected('deletedResults') ? 'bg-gray-600' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick('deletedResults');
                }}
              >
                Deleted Results
                </a>
            </li>
            <li>
              <button
                className="w-full text-left py-2 px-4 hover:bg-gray-700 flex items-center justify-between"
                onClick={() => setOpenProstate(!openProstate)}
              >
                Prostate Cancer
                {openProstate ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
              </button>
              <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openProstate ? 'max-h-40' : 'max-h-0'}`}>
                <ul className="pl-4 mt-2">
                  <li>
                    <a
                      href="#"
                      className={`block py-2 px-4 hover:bg-gray-600 ${isSelected('Gleason') ? 'bg-gray-600' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick('Gleason');
                      }}
                    >
                      Gleason
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                className="w-full text-left py-2 px-4 hover:bg-gray-700 flex items-center justify-between"
                onClick={() => setOpenBreast(!openBreast)}
              >
                Breast Cancer
                {openBreast ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
              </button>
              <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openBreast ? 'max-h-40' : 'max-h-0'}`}>
                <ul className="pl-4 mt-2">
                  <li>
                    <a
                      href="#"
                      className={`block py-2 px-4 hover:bg-gray-600 ${isSelected('KI67') ? 'bg-gray-600' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick('KI67');
                      }}
                    >
                      KI67
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`block py-2 px-4 hover:bg-gray-600 ${isSelected('Her2') ? 'bg-gray-600' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick('Her2');
                      }}
                    >
                      Her2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`block py-2 px-4 hover:bg-gray-600 ${isSelected('Estrógeno') ? 'bg-gray-600' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick('Estrógeno');
                      }}
                    >
                      Estrogen
                      </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`block py-2 px-4 hover:bg-gray-600 ${isSelected('Progesterona') ? 'bg-gray-600' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick('Progesterona');
                      }}
                    >
                      Progesterone
                      </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <div className="p-4 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full text-left py-2 px-4 hover:bg-gray-700 flex items-center justify-between"
          >
            <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
