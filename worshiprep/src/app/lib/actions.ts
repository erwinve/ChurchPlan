'use server';

import { writeFile } from "fs/promises";
import { join } from "path";
import { z } from "zod";
import { sql } from '@vercel/postgres';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Song } from "./definitions";

const SongSchema = z.object({
    id: z.string(),
    songname: z.string(),
    artist: z.string(),
    key: z.string(),
    timesign: z.string(),
    file: z.instanceof(File),
    date: z.string(),
});

const CreateSong = SongSchema.omit({ date: true });

export async function createSong(formData: FormData) {
    console.log('createSong', formData);
    const { id, songname, artist, key, timesign, file } = CreateSong.parse({
        id: formData.get('itemId'),
        songname: formData.get('song-name'),
        artist: formData.get('artist-name'),
        key: formData.get('key'),
        timesign: formData.get('timesign'),
        file: formData.get('file'),
    });

    const date = new Date().toISOString().split('T')[0];

    await sql`
        INSERT INTO songs (songname, artistname, key, timesign, chordsheet, creation_date)
        VALUES (${songname}, ${artist}, ${key}, ${timesign}, ${file ? file.name : null}, ${date})
    `;

    //prepare data and upload it to the server after the database is filled
    if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const path = join('public/chordsheets', file.name);
        await writeFile(path, buffer);
        console.log(`open ${path} to see uploaded file`)
    }

    revalidatePath('/liturgy');
    redirect('/liturgy');
}

export async function editSong(formData: FormData) {
    const { id, songname, artist, key, timesign, file } = CreateSong.parse({
        id: formData.get('itemId'),
        songname: formData.get('song-name'),
        artist: formData.get('artist-name'),
        key: formData.get('key'),
        timesign: formData.get('timesign'),
        file: formData.get('file'),
    });

    const date = new Date().toISOString().split('T')[0];

    await sql`
        UPDATE songs
        SET songname = ${songname}, artistname = ${artist}, key = ${key}, timesign = ${timesign}, chordsheet = ${file ? file.name : null}, creation_date = ${date}
        WHERE id = ${id}
    `;

    //prepare data and upload it to the server after the database is filled
    if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const path = join('public/chordsheets', file.name);
        await writeFile(path, buffer);
        console.log(`open ${path} to see uploaded file`)
    }

    revalidatePath('/liturgy');
    redirect('/liturgy');
}

export async function fetchSongById(id: string) {
    try {
      const data = await sql<Song>`SELECT * FROM songs WHERE id = ${id}`;
  
      return data.rows[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch song.'+error);
    }
  }

export async function deleteSong(id: string) {
    try {
      await sql`DELETE FROM songs WHERE id = ${id}`;
      revalidatePath('/dashboard/invoices');
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to delete song.<br>" + error);
    }
  }
