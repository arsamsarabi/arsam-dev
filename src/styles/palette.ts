// 🚨 WIP
// To abstract colour values away and replace the
// usage of colours directly from the theme file

type ColourSchemes = 'light' | 'dark'

type Shades = Record<'l' | 'm' | 'd', string>

export type Palette = Record<
  ColourSchemes,
  {
    text: Shades
  }
>
