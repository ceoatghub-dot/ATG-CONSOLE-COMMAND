import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata = {
  title: 'ATG Shipping LLC',
  description: 'ATG Shipping LLC contact and logistics services page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
