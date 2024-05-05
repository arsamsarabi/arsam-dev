export const PRIMARY_INDEX = 5
export const COLOUR_BLACK = '#3D3C42'
export const COLOUR_WHITE = '#FEFBF6'
export const COLOURS = {
  accent: [
    '#f2eef3',
    '#e5dce6',
    '#ccbacd',
    '#b297b5',
    '#99759c',
    '#7f5283',
    '#664269',
    '#4c314f',
    '#332134',
    '#19101a',
  ],
  brand: [
    '#eff7ff',
    '#def0ff',
    '#bde0ff',
    '#9cd1ff',
    '#7bc1ff',
    '#5ab2ff',
    '#488ecc',
    '#366b99',
    '#244766',
    '#122433',
  ],
} as const

export type ThemeColors = keyof typeof COLOURS
