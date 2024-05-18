'use client'

import { Burger as MBurger } from '@mantine/core'
import { useBurgerStore } from '#/stores/burger.store'
import cn from './burger.module.css'

export const Burger = () => {
  const { isOpen, toggle } = useBurgerStore(({ isOpen, toggle }) => ({
    isOpen,
    toggle,
  }))

  return (
    <div className={cn.wrapper}>
      <MBurger onClick={toggle} opened={isOpen} />
    </div>
  )
}
