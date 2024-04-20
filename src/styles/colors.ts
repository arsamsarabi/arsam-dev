export const colors = {
  brand: [
    '#e9f8ff',
    '#d4f2ff',
    '#beebff',
    '#a9e5ff',
    '#93deff',
    '#76b2cc',
    '#588599',
    '#3b5966',
    '#1d2c33',
    '#172329',
  ],
} as const

export type ThemeColors = keyof typeof colors
