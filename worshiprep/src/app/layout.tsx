import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { HomeIcon, BookOpenIcon, OfficeBuildingIcon } from '@heroicons/react/outline';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100 text-slate-900 min-h-screen">
          <div className="p-4 bg-white w-64">
            <h2 className="font-semibold text-xl mb-4">WorshipRep</h2>
            <nav>
              <Link href="/" className="flex items-center mb-2 text-gray-700 hover:text-gray-900">
                <HomeIcon className="h-5 w-5 mr-2" />
                Dashboard
              </Link>
              <Link href="/liturgy" className="flex items-center mb-2 text-gray-700 hover:text-gray-900">
                <BookOpenIcon className="h-5 w-5 mr-2" />
                Liturgy
              </Link>
              {/* Add more links here */}
            </nav>
          </div>
          <div className="flex-grow bg-slate-50 p-4 m-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}