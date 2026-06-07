import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'ATG Console Command',
  description: 'ATG Empire OS - Console Command Interface',
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
