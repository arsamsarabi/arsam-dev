import type { PropsWithChildren } from 'react'
import { Footer } from '#/components/footer'
import { Header } from '#/components/header'
import { Navigation } from '#/components/navigation'
import cn from './layout.module.css'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cn.container}>
      <Header />
      <main className={cn.main}>
        <Navigation />
        {children}
      </main>
      <Footer />
    </div>
  )
}
