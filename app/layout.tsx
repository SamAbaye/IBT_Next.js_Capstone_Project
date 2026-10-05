'use client';
import './globals.css';
import { Inter, Albert_Sans, Montserrat} from 'next/font/google';
import Header from './ui/header/Header';
import Footer from './ui/footer/Footer';
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
 });

const albert = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-albert',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
{
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
