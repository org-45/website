'use client';

import Script from 'next/script';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import './globals.css';

// Dynamically import Chimebox with SSR disabled and cast it as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Chimebox = dynamic(() => import('react-chimebox'), {ssr: false}) as any;

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});

const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Google Analytics Scripts */}
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-Q291RN2ZZD" />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-Q291RN2ZZD', {
                                page_path: window.location.pathname,
                            });
                        `,
                    }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}

                {/* Render Chimebox component dynamically */}
                <Chimebox
                    siteId="e641328e-f5fd-4ee4-ad2a-eea64a58406f"
                    turnstileDataSiteKey="0x4AAAAAAAyyLs9gui2lJm5y"
                />
            </body>
        </html>
    );
}
