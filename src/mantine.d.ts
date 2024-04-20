import { DefaultMantineColor } from '@mantine/core'
import { ThemeColors } from './styles/colors'
import { ThemeOther } from './styles/other'

declare module '@mantine/core' {
  export interface MantineThemeOther extends ThemeOther {}

  export interface MantineThemeColorsOverride {
    colors: Record<
      ThemeColors | DefaultMantineColor,
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
      ]
    >
  }

  export interface MantineTheme {
    other: MantineThemeOther
  }
}
