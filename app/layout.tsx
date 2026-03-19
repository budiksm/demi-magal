import type { Metadata } from 'next';
import { Caveat, Inter, Just_Me_Again_Down_Here } from 'next/font/google';
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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={`${caveat.variable} ${justMe.variable} ${inter.variable}`}>
      <body className="font-sans antialiased selection:bg-peach selection:text-burgundy" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
