import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';
import ToasterProvider from '@/providers/toast-provider';

import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ModalProvider />
          <ToasterProvider />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
