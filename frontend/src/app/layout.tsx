import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "next-themes"
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'FreierFreier23 - Personal Blog',
  description: 'Personal blog and portfolio for FreierFreier23',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar className='sticky top-0 z-10' />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer className="sticky bottom-0 z-10" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}