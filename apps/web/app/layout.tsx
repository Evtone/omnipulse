import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OmniPulse Dashboard',
  description: 'Clinical dashboard for patients and providers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
