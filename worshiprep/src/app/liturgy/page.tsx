import React from 'react';
import { LiturgyItem } from "../components/liturgy-item";
import Link from "next/link"
import { fetchSongs } from "../lib/data";

export default async function Page() {
    const songs = await fetchSongs();


    return (
        <div>
            <ul className="grid grid-cols-12 gap-4 mb-10 text-sm leading-6">
                <li className="flex col-start-4 col-end-10">
                    <Link href="/liturgy/create" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 font-medium py-3">
                    <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                    </svg>
                    Add new song
                    </Link>
                </li>
            </ul>
            
            <div className="w-full">
                <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 text-sm leading-6 font-medium">
                    <li className="grid">
                    <div className="grid px-5 py-3 grid-cols-8">
                        <div className="col-span-3">Title</div>
                        <div className="col-span-1">Key</div>
                        <div className="col-span-1">Time signature</div>
                        <div className="col-span-1">BPM</div>
                        <div className="col-span-1">Creation date</div>
                    </div>
                    </li>
                    {songs.map((song, index) => (
                        <LiturgyItem
                        id={song.id}
                        key={index}
                        title={song.songname}
                        songKey={song.key}
                        timeSignature={song.timesign}
                        // Assuming bpm and dateAdded are not provided by the song object and are static or calculated values
                        bpm="120"
                        dateAdded="2021-09-01"
                        position={index === 0 ? 'top' : index === songs.length - 1 ? 'bottom' : 'middle'}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};