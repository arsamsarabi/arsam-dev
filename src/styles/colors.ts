export const PRIMARY_INDEX = 5
export const COLOUR_BLACK = '#081621'
export const COLOUR_WHITE = '#F6F0FA'
export const COLOURS = {
  primary: [
    '#F2EEF7',
    '#D7CBE8',
    '#B096D1',
    '#8862BA',
    '#634091',
    '#4A306D', // Primary
    '#40295E',
    '#36224E',
    '#2B1C3F',
    '#20152F',
    '#1B0F2E',
    '#160B2D',
  ],
  secondary: [
    '#F2E9F2',
    '#D7BED9',
    '#CAA9CC',
    '#BD93C0',
    '#AF7EB3',
    '#A167A5', // Primary
    '#76477A',
    '#533255',
    '#2F1D31',
    '#180E18',
    '#120B12',
    '#0D090D',
  ],
  tertiary: [
    '#F2ECF0',
    '#ECE2E9',
    '#E6D8E2',
    '#DFCFDA',
    '#D9C5D3',
    '#D3BCCC', // Primary
    '#B188A5',
    '#8A5A7B',
    '#56384D',
    '#22161F',
    '#0B0A0B',
    '#030303',
  ],
} as const

export type ThemeColors = keyof typeof COLOURS
