'use client'

import { type CSSVariablesResolver, MantineProvider } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { other } from './other'
import { theme } from './theme'

const toCSSVars = (prefix: string, props: Record<string, string | number>) =>
  Object.entries(props).reduce(
    (acc, [key, value]) => ({ ...acc, [`--mantine-${prefix}-${key}`]: value }),
    {}
  )

const resolver: CSSVariablesResolver = () => ({
  variables: {
    ...toCSSVars('avatar', other.avatar),
  },
  light: {},
  dark: {},
})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider
      cssVariablesResolver={resolver}
      defaultColorScheme="auto"
      theme={theme}
    >
      {children}
    </MantineProvider>
  )
}
