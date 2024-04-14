import {
  IconBook2,
  IconHome,
  IconMoonFilled,
  IconSend,
  IconSunFilled,
  IconUserFilled,
} from '@tabler/icons-react'
import { ReactNode } from 'react'

export type Icons = 'sun' | 'moon' | 'home' | 'user' | 'send' | 'book'

export type IconProps = {
  size?: string | number
  stroke?: string | number
}

export const ICONS: Record<Icons, (props: IconProps) => ReactNode> = {
  sun: IconSunFilled,
  moon: IconMoonFilled,
  home: IconHome,
  user: IconUserFilled,
  send: IconSend,
  book: IconBook2,
}
