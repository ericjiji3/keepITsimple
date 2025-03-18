import { Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "KeepingItSimple",
  description: "Discover How Automation can Revolutionize Your Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16912626049"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16912626049');
          `}
        </Script>
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
