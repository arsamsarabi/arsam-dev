'use client'

import { useIsLoaded } from '#/hooks/use-is-loaded'
import { ICONS, IconProps, type Icons } from './all-icons'

type Props = IconProps & {
  name: Icons
  className?: string
}

export const Icon = ({ color, name, ...rest }: Props) => {
  const isLoaded = useIsLoaded()
  const Icon = ICONS[name]

  if (!isLoaded) return null

  return <Icon color={color} stroke={1.4} {...rest} />
}
