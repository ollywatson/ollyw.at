import '../app/globals.css';
import { Literata, Mona_Sans, Outfit } from 'next/font/google';
import PreloadImages from '@/components/preloadimages';

// Load the fonts
const literata = Literata({
  subsets: ['latin'],
  variable: '--literata',
  weight: ['300', '400', '500', '600', '700', '800'], // Specify weights as an array
  style: ['italic'], // Include italic style
});

const monaSans = Mona_Sans({
  subsets: ['latin'],
  variable: '--font-mona-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'], // Specify weights as an array
});

export const metadata = {
  title: 'Olly Watson',
  description: 'Product designer from London, UK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monaSans.variable} antialiased`}>
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <PreloadImages />
        {children}
      </body>
    </html>
  );
}