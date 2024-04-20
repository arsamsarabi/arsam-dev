'use client'

import { MantineProvider } from '@mantine/core'
import type { PropsWithChildren } from 'react'
import { theme } from '#/styles/theme'
import { env } from '#/utils/env'

export const AppProviders = ({ children }: PropsWithChildren<unknown>) => {
  console.log('client side env vars')
  console.log(env)
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      {children}
    </MantineProvider>
  )
}
