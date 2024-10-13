import { Exo } from 'next/font/google'
import favicon from '@/public/favicon.ico'
import { GlobalStyle } from './styles/theme'

const exo = Exo({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel="shortcut icon" href={ favicon.src } type="image/x-icon" />
      </head>
      <body className={ exo.className }>
        <header>
        </header>
        <GlobalStyle />
        { children }
      </body>
    </html>
  )
}
