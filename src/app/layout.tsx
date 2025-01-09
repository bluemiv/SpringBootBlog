import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const pretendardFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE || "Berryfy's Blog",
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A development blog built with Next.js version 15.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendardFont.className} antialiased`}>{children}</body>
    </html>
  );
}
