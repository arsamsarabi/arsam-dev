'use client'

import { Box } from '@mantine/core'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useBurgerStore } from '#/stores/burger.store'
import { SidebarFooter } from './sidebar-footer'
import cn from './sidebar.module.css'

const spring = {
  ease: 'easeIn',
  duration: 0.2,
}

export const Sidebar = () => {
  const isOpen = useBurgerStore((state) => state.isOpen)

  return (
    <motion.aside
      className={clsx(cn.sidebar, { [cn.sidebar__open]: isOpen })}
      layout
      transition={spring}
    >
      <div className={cn.content}>Sidebar content</div>
      <SidebarFooter />
    </motion.aside>
  )
}
