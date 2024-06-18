import './globals.css'
import StyledComponentsRegistry from './lib/registry'
import localFont from 'next/font/local'
import { Figtree } from 'next/font/google'
import Script from 'next/script'

export const metadata = {
  title: 'Clínica LP OdontoPrime',
  description: 'O sorriso dos sonhos é na LP OdontoPrime',
}

const apollo = localFont({
  src: '../public/fonts/APOLLO.otf',
  display: 'swap',
  variable: '--font-apollo'
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-Br" className={`${apollo.variable} ${figtree.className}`}>
      <head>
        <Script id='gtag' src="https://www.googletagmanager.com/gtag/js?id=AW-10835194696" />
        <Script id='gtag-google'>
          {` window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'AW-10835194696');
          `}
        </Script>
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
          {/* <FacebookPixel /> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
