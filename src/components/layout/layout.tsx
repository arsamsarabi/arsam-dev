import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import ucn from '~/styles/utility-classes.module.css'
import cn from './layout.module.css'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cn.container}>
      <Header />
      <main className={clsx(cn.main, ucn['container-padding'])}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
