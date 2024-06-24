import { sql } from '@vercel/postgres';
import {
  Song,
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchSongs() {
  noStore();
  try {
    const data = await sql<Song>`SELECT * FROM songs`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
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