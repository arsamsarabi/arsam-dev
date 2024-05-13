import { Text } from '@mantine/core'
import Link from 'next/link'
import { Icon, type Icons } from '#/components/icon'
import cn from './mobile-nav-link.module.css'

type Props = {
  href: string
  label: string
  icon: Icons
}

export const MobileNavLink = ({ href, label, icon }: Props) => {
  return (
    <Link href={href} className={cn.link}>
      <Icon className={cn.icon} name={icon} />
      <Text className={cn.text}>{label}</Text>
    </Link>
  )
}
