'use client'

import { MantineProvider } from '@mantine/core'
import type { PropsWithChildren } from 'react'
import { theme } from '#/styles/theme'

export const AppProviders = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      {children}
    </MantineProvider>
  )
}