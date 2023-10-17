import '../styles/variable.css';
import './layout.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactQueryProviders, JotaiProviders } from './providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyBlog',
  description: 'MyBlog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReactQueryProviders>
          <JotaiProviders>{children}</JotaiProviders>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
