import type { Metadata } from 'next';
import { Caveat, Inter } from 'next/font/google';
import './globals.css';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
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
    <html lang="en" className={`${caveat.variable} ${inter.variable}`}>
      <body className="font-sans antialiased selection:bg-peach selection:text-burgundy" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
