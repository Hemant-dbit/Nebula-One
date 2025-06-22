'use client';
import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Navbar from '../layout/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nebula One</title>
        <meta name="description" content="Nebula One – Experience the future. Minimal. Powerful. Beautiful." />
      </head>
      <body className="bg-black text-white font-sans antialiased min-h-screen">
        <Navbar />
        {loading && <Loader />}
        <div className={loading ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-700'}>
          {children}
        </div>
      </body>
    </html>
  );
}
