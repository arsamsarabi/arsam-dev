import { alpha } from '@mantine/core'
import { COLOURS, PRIMARY_INDEX } from './colors'

export const other = {
  avatar: {
    shadowDark: `0 0 12px 2px ${alpha(COLOURS.brand[PRIMARY_INDEX], 0.25)};`,
  },
}

export type ThemeOther = keyof typeof other
