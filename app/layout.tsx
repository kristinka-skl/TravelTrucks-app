import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import TanStackProvider from './components/TanStackProvider/TanStackProvider';

const interSans = Inter({
  variable: '--font-inter-sans',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Travel Trucks',
  description: 'Book camper for your next adventure',
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
          </Container>
        </TanStackProvider>
      </body>
    </html>
  );
}
