import { Space } from '@mantine/core'
import clsx from 'clsx'
import { ColorSchemeToggle } from '#/components/color-scheme-toggle'
import { Socials } from '#/components/socials'
import ucn from '#/styles/utility-classes.module.css'
import cn from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={clsx(cn.footer, ucn['container-padding'])}>
      <Socials />
      <ColorSchemeToggle />
    </footer>
  )
}
