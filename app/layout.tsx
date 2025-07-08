import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'README Generator - Create Stunning GitHub Profiles',
  description: 'Generate beautiful GitHub README profiles with ease. Modern, customizable, and professional templates.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        <SonnerToaster 
          theme="dark" 
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgb(31 41 55)',
              border: '1px solid rgb(75 85 99)',
              color: 'white',
            },
          }}
        />
      </body>
    </html>
  );
}