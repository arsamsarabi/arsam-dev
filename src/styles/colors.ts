export const PRIMARY_INDEX = 5
export const COLOUR_BLACK = '#22223b'
export const COLOUR_WHITE = '#f2e9e4'
export const COLOURS = {
  primary: [
    '#dbdce1',
    '#b7b8c3',
    '#9295a5',
    '#6e7187',
    '#4a4e69', // Primary shade
    '#3b3e54',
    '#2c2f3f',
    '#1e1f2a',
    '#0f1015',
    '',
  ],
  secondary: [
    '#ebe8ea',
    '#d7d1d6',
    '#c2bac1',
    '#aea3ad',
    '#9a8c98', // Primary shade
    '#7b707a',
    '#5c545b',
    '#3e383d',
    '#1f1c1e',
    '',
  ],
  tertiary: [
    '#f4efed',
    '#e9dedc',
    '#dfceca',
    '#d4bdb9',
    '#c9ada7', // Primary shade
    '#a18a86',
    '#796864',
    '#504543',
    '#282321',
    '',
  ],
} as const

export type ThemeColors = keyof typeof COLOURS
