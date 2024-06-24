import React, { useEffect, useState } from 'react';
import { editSong } from "@/app/lib/actions";
import { fetchSongById } from '@/app/lib/actions';
import { SongForm } from '@/app/components/songform';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const song = await fetchSongById(id);

    return (
    <form action={editSong}>
        <SongForm id={id} song={song} />
    </form>
    );
};