import type { Metadata } from 'next';
import { AppWithProviders } from '@/components/AppWithProvider';
import './globals.scss';

declare global {
  interface Window {
    // ethereum: import('ethers').providers.ExternalProvider;
    ethereum: any;
  }
}

export const metadata: Metadata = {
  title: 'Seedstarter',
  description: 'Decentralized private investors venture fund',
  icons: '/favicon_io/favicon-32x32.png',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      <body>
        <AppWithProviders>
          {children}
        </AppWithProviders>
      </body>
    </html>
  );
}
