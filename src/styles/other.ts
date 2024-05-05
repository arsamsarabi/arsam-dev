import { alpha } from '@mantine/core'
import { PRIMARY_INDEX, colors } from './colors'

export const other = {
  avatar: {
    shadowDark: `0 0 12px 2px ${alpha(colors.secondary[PRIMARY_INDEX], 0.25)};`,
  },
}

export type ThemeOther = keyof typeof other
