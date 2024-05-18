'use client'

import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import { Footer } from '#/components/footer'
import { Header } from '#/components/header'
import { useBurgerStore } from '#/stores/burger.store'
import { Burger } from '../burger'
import { MobileMenu } from '../mobile-menu'
import cn from './layout.module.css'

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  const isOpen = useBurgerStore(({ isOpen }) => isOpen)

  return (
    <>
      <MobileMenu />
      <Burger />

      <div
        className={clsx(cn.container, {
          [`${cn.container__opened}`]: isOpen,
        })}
      >
        <Header />
        <main
          className={clsx(cn.main, {
            [`${cn.main__opened}`]: isOpen,
          })}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
