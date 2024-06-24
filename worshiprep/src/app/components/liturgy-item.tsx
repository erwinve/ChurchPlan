'use client'; 
import Link from "next/link";
import { useState } from "react";
import { deleteSong } from "@/app/lib/actions";
import { v4 } from "uuid";

interface LiturgyItemProps {
  id: string;
  title: string;
  songKey: string;
  timeSignature: string;
  bpm: string;
  dateAdded: string;
  position: 'top' | 'middle' | 'bottom' | 'only';
}

export const LiturgyItem: React.FC<LiturgyItemProps> = ({ id, title, songKey, timeSignature, bpm, dateAdded, position }) => {
  let borderClasses = 'border-2';
  if (position === 'top') borderClasses = 'border-b-0 rounded-t-lg';
  if (position === 'middle') borderClasses = 'border-b-0 rounded-none';
  if (position === 'bottom') borderClasses = 'rounded-b-lg';
  if (position === 'only') borderClasses = '';
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownMenu = document.querySelector('#dropdown-menu');

  const handleDelete = () => {
    console.log('Delete action for', id);
    deleteSong(id);
  };

  const handleEdit = () => {
    console.log('Edit action for', id);
  };

  addEventListener('click', (e: any) => {
    if (dropdownMenu && !dropdownMenu.contains(e.target)) {
      setShowDropdown(false);
    }
  });

    

  return (
    <li className="relative">
      <Link href={`liturgy/${id}`} className={`hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center border-2 ${borderClasses} text-sm leading-6 text-slate-900 font-medium py-3`}>
      <div className="w-full parentlist px-5 text-left grid grid-cols-8">
          <div className="col-span-3">{title}</div>
          <div className="col-span-1">{songKey}</div>
          <div className="col-span-1">{timeSignature}</div>
          <div className="col-span-1">{bpm}</div>
          <div className="col-span-1">
            {dateAdded}
          </div>
          
          <div className="col-span-1 text-right relative justify-center" tabIndex={0}>
            <button 
              
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowDropdown(!showDropdown);
              }} className="ml-2 h-full hover:text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>

            </button>
          </div>
        </div>
      </Link>
      <div id="dropdown-menu" className={`absolute min-w-32 z-10 right-10 mt-2 bg-white shadow-lg rounded p-2 ${showDropdown == true ? 'block' : 'hidden'}`}>
              <Link href={`/liturgy/${id}/edit`} className="block w-full text-left p-2 hover:text-blue-500 hover:bg-gray-100 rounded">Edit</Link>
              <button onClick={handleDelete} className="block w-full text-left p-2 hover:text-red-500 hover:bg-gray-100 rounded">Delete</button>
      </div>
    </li>
  );
};