import {
  Great_Vibes,
  JetBrains_Mono,
  Julee,
  M_PLUS_Code_Latin,
} from 'next/font/google'

export const body = JetBrains_Mono({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

export const heading = M_PLUS_Code_Latin({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-heading',
})

export const cursive = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cursive',
})
