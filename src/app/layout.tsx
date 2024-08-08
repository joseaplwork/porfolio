import { VercelToolbar } from '@vercel/toolbar/next';
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Space_Mono } from 'next/font/google';

import PageBackground from './ui/page-background';

import './globals.css';

export const metadata: Metadata = {
  title: 'Jose Paredes Leon',
  description: 'Portfolio of projects',
};

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <PageBackground />
        {children}
        <VercelToolbar />
      </body>
    </html>
  );
}
