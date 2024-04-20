'use client'

import { Burger as BurgerButton } from '@mantine/core'
import { useBurgerStore } from '#/stores/burger.store'

export const Burger = () => {
  const toggle = useBurgerStore((state) => state.toggle)
  const isOpen = useBurgerStore((state) => state.isOpen)

  return (
    <BurgerButton opened={isOpen} onClick={toggle} hiddenFrom="sm" size="sm" />
  )
}
