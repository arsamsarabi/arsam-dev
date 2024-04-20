import '@mantine/core/styles.css'
import '~/styles/globals.css'
import { ColorSchemeScript } from '@mantine/core'
import type { Metadata } from 'next'
import { Layout } from '~/components/layout'
import { Providers } from '~/components/providers'
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
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
