import React, { ReactNode } from 'react';
import Header from 'components/Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      {children}
    </main>
  );
}
