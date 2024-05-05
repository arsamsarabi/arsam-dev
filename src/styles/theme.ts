import {
  DEFAULT_THEME,
  createTheme,
  mergeMantineTheme,
  rem,
} from '@mantine/core'
import { COLOURS, COLOUR_BLACK, COLOUR_WHITE, PRIMARY_INDEX } from './colors'
import { body, heading } from './fonts'
import { other } from './other'

const themeOverride = createTheme({
  white: COLOUR_WHITE,
  black: COLOUR_BLACK,
  colors: COLOURS,
  primaryColor: 'brand',
  primaryShade: PRIMARY_INDEX,
  fontFamily: body.style.fontFamily,
  headings: {
    fontFamily: heading.style.fontFamily,
  },
  fontSizes: {
    xs: rem(14),
    sm: rem(16),
    md: rem(18),
    lg: rem(26),
    xl: rem(34),
    '2xl': rem(42),
    '3xl': rem(50),
    '4xl': rem(58),
    '5xl': rem(66),
    '6xl': rem(74),
  },
  defaultRadius: 'sm',
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  spacing: {
    xs: rem(14),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(40),
    '2xl': rem(48),
    '3xl': rem(56),
    '4xl': rem(64),
    '5xl': rem(72),
    '6xl': rem(80),
  },
  other,
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
