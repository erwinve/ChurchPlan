import React from 'react';
import LiturgyHeader from './header';
import { fetchSongById } from '@/app/lib/actions';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const song = await fetchSongById(id);
    
    return (
        <div>
            <LiturgyHeader song={song} />
        </div>
    );
};