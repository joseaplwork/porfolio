import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Space_Mono } from 'next/font/google';
import { ReactNode } from 'react';

import PageBackground from './ui/page-background.component';

import './globals.css';

export const metadata: Metadata = {
  title: 'Jose Paredes Leon',
  description: 'Portfolio of projects',
};

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
