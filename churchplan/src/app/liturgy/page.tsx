import React from 'react';
import { LiturgyItem } from "../components/liturgy-item";

const Page: React.FC = () => {
    return (
        <div>
            <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm leading-6">
                <li className="flex">
                    <a href="/new" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 font-medium py-3">
                    <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                    </svg>
                    Add new song
                    </a>
                </li>
            </ul>
            
            <div className="w-full">
                <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 text-sm leading-6 font-medium">
                <li className="grid">
                <div className="grid px-5 py-3 grid-cols-8">
                    <div className="col-span-4">Title</div>
                    <div className="col-span-1">Key</div>
                    <div className="col-span-1">Time signature</div>
                    <div className="col-span-1">BPM</div>
                    <div className="col-span-1 text-right">Datum Toegevoegd</div>
                </div>
                </li>
                <LiturgyItem title="Song 1" songKey="C" timeSignature="4/4" bpm="120" dateAdded="2021-09-01" position="top" />
                <LiturgyItem title="Song 1" songKey="C" timeSignature="4/4" bpm="120" dateAdded="2021-09-01" position="middle" />
                <LiturgyItem title="Song 1" songKey="C" timeSignature="4/4" bpm="120" dateAdded="2021-09-01" position="bottom" />
                </ul>
            </div>
        </div>
    );
};

export default Page;