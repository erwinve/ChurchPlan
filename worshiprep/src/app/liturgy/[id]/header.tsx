import { Song } from '@/app/lib/definitions';
import './header.css';
import React, { useEffect, useState } from 'react';

interface LiturgyItem {
    song: Song;
}
 
const LiturgyHeader: React.FC<LiturgyItem> = ({song}) => {

    return (
        <div className='bg-blue-500 p-10 px-20 text-white'>
            <h1 className='text-3xl mb-4'>{song.songname}</h1>
            <h2 className="text-xl mb-8">{song.artistname} - {song.songname}</h2>
            <div className='flex justify-around mb-2'>
                <span><b>Key:</b> {song.key}</span>
                <span><b>Time sig:</b> {song.timesign}</span>
                <span><b>BPM:</b> </span>
            </div>
           
        </div>            
    );
};

export default LiturgyHeader;
