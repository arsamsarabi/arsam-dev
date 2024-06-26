'use client'

import { Space } from '@mantine/core'
import clsx from 'clsx'
import { ColorSchemeToggle } from '#/components/color-scheme-toggle'
import { Logo } from '#/components/logo'
import { useBurgerStore } from '#/stores/burger.store'
import ucn from '#/styles/utility-classes.module.css'
import { LinkList } from './link-list'
import cn from './mobile-menu.module.css'

export const MobileMenu = () => {
  const isOpen = useBurgerStore(({ isOpen }) => isOpen)

  return (
    <div
      className={clsx(ucn[`container-padding`], cn.wrapper, {
        [`${cn.wrapper__opened}`]: isOpen,
      })}
    >
      <Logo />
      <Space h="md" />
      <LinkList />
      <Space h="md" />
      <ColorSchemeToggle />
    </div>
  )
}
