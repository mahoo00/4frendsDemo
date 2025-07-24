import './globals.css';
import { ReactNode } from 'react';
import Providers from './providers';

export const metadata = {
    title: 'My App',
    description: 'Using React Query with Next.js App Router',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
