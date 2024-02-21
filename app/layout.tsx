import './globals.css'
import StyledComponentsRegistry from './lib/registry'
import localFont from 'next/font/local'
import { Figtree } from 'next/font/google'
import Meta from './components/global/Meta'
import Google from './components/global/Google'

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
      <header>
        <Meta />
        <Google />
      </header>
      <body>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1162821521076917&ev=PageView&noscript=1"
        /></noscript>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
