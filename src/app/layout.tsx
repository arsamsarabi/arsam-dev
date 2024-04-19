import '~/styles/globals.css'
import type { Metadata } from 'next'
import { Providers } from '~/components/Providers'
import { body, cursive, heading } from '~/styles/fonts'

export const metadata: Metadata = {
  title: 'Arsam Sarabi',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${body.variable} ${heading.variable} ${cursive.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
