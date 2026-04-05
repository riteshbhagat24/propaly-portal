import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Propaly Realtors | Find Your Piece of Pune',
  description: "Pune's trusted real estate advisory.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}