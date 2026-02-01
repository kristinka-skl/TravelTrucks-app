import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import TanStackProvider from './components/TanStackProvider/TanStackProvider';
import { Toaster } from 'react-hot-toast';

const interSans = Inter({
  variable: '--font-inter-sans',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Travel Trucks',
  description: 'Book camper for your next adventure',
  openGraph: {
    title: `Travel Trucks`,
    description: 'Book camper for your next adventure',
    url: `https://travel-trucks-app-eight.vercel.app/`,
    siteName: 'Travel Trucks',
    images: [
      {
        url: '/TravelTrucks.webp',
        width: 1200,
        height: 630,
        alt: 'Camper app',
      },
    ],
    type: 'article',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable}`}>
        <TanStackProvider>
          <Container>
            <Header />
            {children}
            <Toaster position="top-right" reverseOrder={false} />
          </Container>
        </TanStackProvider>
      </body>
    </html>
  );
}
