import clsx from 'clsx'
import { Logo } from '#/components/logo'
import { Nav } from '#/components/nav'
import ucn from '#/styles/utility-classes.module.css'
import cn from './header.module.css'

export const Header = () => {
  return (
    <header className={clsx(cn.header, ucn['container-padding'])}>
      <Logo />
      <Nav />
    </header>
  )
}
