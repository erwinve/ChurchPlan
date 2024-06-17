"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';



export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/liturgy')}>
      liturgy
    </button>
  )
}
