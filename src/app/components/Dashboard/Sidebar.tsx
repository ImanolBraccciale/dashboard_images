"use client";
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { SidebarProps } from '@/app/Hooks/DashBoard/Hooks';

const Sidebar: React.FC<SidebarProps> = ({ onItemSelect }) => {
  const [openProstate, setOpenProstate] = useState(false);
  const [openBreast, setOpenBreast] = useState(false);

  //Aqui estan Iniciio, Perfil, Resultados, Resultados Borrados y Acordeones de canceres

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
      <div className="p-4 text-xl font-bold">Dashboard</div>
      <nav className="flex-1 p-4">
        <ul>
          <li>
            <a
              href="/"
              className="block py-2 px-4 hover:bg-gray-700"

            >
              Inicio
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-2 px-4 hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault();
                onItemSelect('DashBoard');
              }}
            >Perfil</a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault();
                onItemSelect('results');
              }}
            >
              Resultados
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault();
                onItemSelect('deletedResults');
              }}
            >
              Resultados Eliminados
            </a>
          </li>
         
           <li>
            <button
              className="w-full text-left py-2 px-4 hover:bg-gray-700 flex items-center justify-between"
              onClick={() => setOpenProstate(!openProstate)}
            >
              Cáncer de Próstata
              {openProstate ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
            </button>
            <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openProstate ? 'max-h-40' : 'max-h-0'}`}>
              <ul className="pl-4 mt-2">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-600"
                    onClick={(e) => {
                      e.preventDefault();
                      onItemSelect('Gleason');
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
              Cáncer de Mama
              {openBreast ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
            </button>
            <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openBreast ? 'max-h-40' : 'max-h-0'}`}>
              <ul className="pl-4 mt-2">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-600"
                    onClick={(e) => {
                      e.preventDefault();
                      onItemSelect('KI67');
                    }}
                  >
                    KI67
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-600"
                    onClick={(e) => {
                      e.preventDefault();
                      onItemSelect('Her2');
                    }}
                  >
                    Her2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-600"
                    onClick={(e) => {
                      e.preventDefault();
                      onItemSelect('Estrógeno');
                    }}
                  >
                    Estrógeno
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-600"
                    onClick={(e) => {
                      e.preventDefault();
                      onItemSelect('Progesterona');
                    }}
                  >
                    Progesterona
                  </a>
                </li>
                
              </ul>
              
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
