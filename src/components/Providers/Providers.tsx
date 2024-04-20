'use client'

import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

export const Providers = ({ children }: PropsWithChildren<unknown>) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
