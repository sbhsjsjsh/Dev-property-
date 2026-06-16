import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Dev Property Mumbai | Trusted Real Estate Services',
  description: 'Find verified flats, plots, and apartments in Mumbai with Dev Property. Trusted real estate services and premium property deals.',
  openGraph: {
    title: 'Dev Property Mumbai | Trusted Real Estate Services',
    description: 'Find verified flats, plots, and apartments in Mumbai with Dev Property. Trusted real estate services and premium property deals.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Dev Property Mumbai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Property Mumbai | Trusted Real Estate Services',
    description: 'Find verified flats, plots, and apartments in Mumbai with Dev Property. Trusted real estate services and premium property deals.',
  },
  icons: {
    icon: 'https://i.ibb.co/DgQVm6FW/437666332-1781579564025583.jpg',
  },
  verification: {
    google: 'ZS7Ji6uzAvCK4ZWV-kfNVwciVcpp0w9o9JPaGPKRc4Q',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-slate-50" suppressHydrationWarning>{children}</body>
    </html>
  );
}
