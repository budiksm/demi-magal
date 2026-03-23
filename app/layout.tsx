import type { Metadata } from 'next';
import { Caveat, Inter, Just_Me_Again_Down_Here, Dancing_Script, Mansalva, Beth_Ellen } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
});

const justMe = Just_Me_Again_Down_Here({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-just-me',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing-script',
});

const mansalva = Mansalva({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mansalva',
});

const bethEllen = Beth_Ellen({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-beth-ellen',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const smokyDiamond = localFont({
  src: '../public/fonts/Smoky_Diamond.otf',
  variable: '--font-smoky',
});

const tNanti = localFont({
  src: '../public/fonts/TNanti-Demo.otf',
  variable: '--font-tnanti',
});

const midnightStudy = localFont({
  src: '../public/fonts/Midnight_Study.otf',
  variable: '--font-midnight-study',
});

export const metadata: Metadata = {
  title: 'Wedding Invitation',
  description: 'You are invited to our wedding',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${caveat.variable} ${justMe.variable} ${dancingScript.variable} ${mansalva.variable} ${bethEllen.variable} ${inter.variable} ${tNanti.variable} ${midnightStudy.variable} ${smokyDiamond.variable}`}>
      <body className="font-sans antialiased selection:bg-peach selection:text-burgundy" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
