import {
  DEFAULT_THEME,
  createTheme,
  mergeMantineTheme,
  rem,
} from '@mantine/core'
import { colors } from './colors'
import { body, heading } from './fonts'
import { other } from './other'

const themeOverride = createTheme({
  white: '#F7F7F7',
  black: '#323643',
  colors,
  primaryColor: 'brand',
  primaryShade: {
    light: 6,
    dark: 4,
  },
  fontFamily: body.style.fontFamily,
  headings: {
    fontFamily: heading.style.fontFamily,
  },
  fontSizes: {
    xs: rem(14),
    sm: rem(16),
    md: rem(18),
    lg: rem(20),
    xl: rem(24),
    '2xl': rem(32),
    '3xl': rem(48),
    '4xl': rem(64),
    '5xl': rem(96),
    '6xl': rem(128),
  },
  defaultRadius: 'sm',
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  other,
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
