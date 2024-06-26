import { alpha } from '@mantine/core'
import { COLOURS, PRIMARY_INDEX } from './colors'

export const other = {
  avatar: {
    shadowDark: `0 0 12px 2px ${alpha(COLOURS.primary[PRIMARY_INDEX], 0.25)};`,
  },

  headerHeight: {
    sm: '72px',
    md: '80px',
    lg: '96px',
  },

  footerHeight: {
    sm: '48px',
    md: '48px',
    lg: '48px',
  },

  z: {
    borger: 100,
  },
}

export type ThemeOther = keyof typeof other
