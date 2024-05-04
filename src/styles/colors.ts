export const PRIMARY_INDEX = 4

export const colors = {
  dark: [
    '',
    '#dadcde',
    '#b4b9bd',
    '#8f959c',
    '#69727b',
    '#444f5a',
    '#363f48',
    '#292f36',
    '#1b2024',
    '#0e1012',
  ],
  light: [
    '',
    '#fffef9',
    '#fffdf3',
    '#fffdec',
    '#fffce6',
    '#fffbe0',
    '#ccc9b3',
    '#999786',
    '#66645a',
    '#33322d',
  ],
  primary: [
    '',
    '#d4eaf0',
    '#a9d4e0',
    '#7fbfd1',
    '#54a9c1',
    '#2994b2',
    '#21768e',
    '#19596b',
    '#103b47',
    '#081e24',
  ],
  secondary: [
    '',
    '#fef9e8',
    '#fef4d0',
    '#fdeeb9',
    '#fde9a1',
    '#fce38a',
    '#cab66e',
    '#978853',
    '#655b37',
    '#322d1c',
  ],
} as const

export type ThemeColors = keyof typeof colors
