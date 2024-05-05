'use client'

import { ICONS, IconProps, type Icons } from './icons'

type Props = IconProps & {
  name: Icons
  className?: string
}

export const Icon = ({ color, name, ...rest }: Props) => {
  const Icon = ICONS[name]

  return <Icon color={color} stroke={1.4} {...rest} />
}
