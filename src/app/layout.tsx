import '../styles/variable.css';
import './layout.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactQueryProviders, JotaiProviders } from './providers';
import { cookies } from 'next/dist/client/components/headers';
import Sidebar from '@/components/common/Sidebar';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://moon-develog.vercel.app/'),
  title: {
    default: 'moon_develog',
    template: '%s | moon_develog',
  },
  description: 'moon_develog',
  keywords: [
    'moon_develop',
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'CSS',
    'HTML',
    'moon_develog',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  const isDarkMode = cookies().get('isDarkMode')?.value === 'true';

  return (
    <html lang='en'>
      <body className={inter.className} data-theme={isDarkMode ? 'dark' : 'light'}>
        <ReactQueryProviders>
          <JotaiProviders>
            <div id='__container'>
              <Header isDarkMode={isDarkMode} />
              <div id='__content_wrapper'>
                <Sidebar />
                <div id='__content'>{children}</div>
              </div>
              <Footer />
            </div>
          </JotaiProviders>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
