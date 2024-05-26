'use client'

import { Text } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Icon, type Icons } from '#/components/icon'
import { useBurgerStore } from '#/stores/burger.store'
import cn from './mobile-nav-link.module.css'

type Props = {
  href: string
  label: string
  icon: Icons
}

export const MobileNavLink = ({ href, label, icon }: Props) => {
  const toggle = useBurgerStore((state) => state.toggle)
  const router = useRouter()

  useEffect(() => {
    router.prefetch(href)
  }, [router, href])

  return (
    <Link href={href} className={cn.link} onClick={toggle}>
      <Icon className={cn.icon} name={icon} />
      <Text className={cn.text}>{label}</Text>
    </Link>
  )
}
