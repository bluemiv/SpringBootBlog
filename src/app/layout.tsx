import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import { isNil } from 'lodash';
import ReadingProgressIndicator from '@/components/ReadingProgressIndicator';
import Header from '@/components/Header';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value;
  const isNotSettingTheme = isNil(theme);
  const isDarkTheme = theme === 'dark';

  return (
    <html
      lang="en"
      className={isNotSettingTheme ? '' : `${isDarkTheme ? 'dark' : ''}`}
      suppressHydrationWarning={isNotSettingTheme}
    >
      <body className={`${pretendardFont.className} antialiased h-[500vh]`}>
        {isNotSettingTheme && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function() {
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const themeValue = systemPrefersDark ? 'dark' : 'light';
if (themeValue === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
})();`,
            }}
          />
        )}
        <div className="sticky top-0 left-0 w-full z-10">
          <ReadingProgressIndicator />
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
