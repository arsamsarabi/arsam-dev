'use client'

import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '#/styles/theme-provider'
import { env } from '#/utils/env'

export const AppProviders = ({ children }: PropsWithChildren<unknown>) => {
  console.log('client side env vars')
  console.log(env)
  return <ThemeProvider>{children}</ThemeProvider>
}
