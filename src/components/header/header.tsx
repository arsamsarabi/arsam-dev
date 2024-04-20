import { Space } from '@mantine/core'
import clsx from 'clsx'
import { Burger } from '#/components/burger'
import { Logo } from '#/components/logo'
import ucn from '#/styles/utility-classes.module.css'
import cn from './header.module.css'

export const Header = () => {
  return (
    <header className={clsx(cn.header, ucn['container-padding'])}>
      <Burger />
      <Space w="md" />
      <Logo />
    </header>
  )
}
