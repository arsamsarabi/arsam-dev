'use client'

import { useLoaded } from '~/hooks/use-loaded'
import { ICONS, IconProps, type Icons } from './icons'

type Props = IconProps & {
  name: Icons
}

export const Icon = ({ name, ...rest }: Props) => {
  const loaded = useLoaded()
  const Icon = ICONS[name]

  if (!loaded) return null

  return <Icon stroke={1.4} {...rest} />
}
