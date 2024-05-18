import {
  IconArrowBigDownFilled,
  IconArticle,
  IconBook2,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconHome,
  IconMoonFilled,
  IconSend,
  IconSunFilled,
  IconUser,
} from '@tabler/icons-react'
import { ReactNode } from 'react'

export type Icons =
  | 'blog'
  | 'sun'
  | 'moon'
  | 'home'
  | 'user'
  | 'send'
  | 'book'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'arrow-big-down'

export type IconProps = {
  size?: string | number
  stroke?: string | number
  color?: string
}

// eslint-disable-next-line no-unused-vars
export const ICONS: Record<Icons, (props: IconProps) => ReactNode> = {
  blog: IconArticle,
  sun: IconSunFilled,
  moon: IconMoonFilled,
  home: IconHome,
  user: IconUser,
  send: IconSend,
  book: IconBook2,
  github: IconBrandGithub,
  instagram: IconBrandInstagram,
  linkedin: IconBrandLinkedin,
  'arrow-big-down': IconArrowBigDownFilled,
}
