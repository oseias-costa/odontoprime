import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import localFont from "next/font/local";
import { Figtree } from "next/font/google";
import Script from "next/script";

export const metadata = {
  title: "Clínica LP OdontoPrime",
  description: "O sorriso dos sonhos é na LP OdontoPrime",
};

const apollo = localFont({
  src: "../public/fonts/APOLLO.otf",
  display: "swap",
  variable: "--font-apollo",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br" className={`${apollo.variable} ${figtree.className}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-55J59XF3');
          `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55J59XF3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <StyledComponentsRegistry>
          {children}
          {/* <FacebookPixel /> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
