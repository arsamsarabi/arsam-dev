import { Anchor } from '@mantine/core'
import Link from 'next/link'
import { navLinks } from './links'
import cn from './navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={cn.nav}>
      {navLinks.map(({ name, href }) => (
        <Anchor component={Link} key={name} href={href} className={cn.link}>
          {name}
        </Anchor>
      ))}
    </nav>
  )
}
