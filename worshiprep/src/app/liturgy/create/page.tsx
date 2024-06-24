'use client';
import React, { useState } from 'react';
import { createSong } from "../../lib/actions";
import { set } from 'zod';
import { SongForm } from '@/app/components/songform';

const Page: React.FC = () => {

    const id = '';
    const song = {
        id: '',
        songname: '',
        artistname: '',
        key: '',
        timesign: '',
        chordsheet: '',
    }



    return (
    <form action={createSong} className='flex justify-around items-center w-full h-full group relative'>
        
        <SongForm id={id} song={song} />

    </form>
    );
};

export default Page;