'use client'

import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '#/styles/theme-provider'

export const Providers = ({ children }: PropsWithChildren<unknown>) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
