import clsx from 'clsx'
import ucn from '#/styles/utility-classes.module.css'
import { ColorSchemeToggle } from '../color-scheme-toggle'
import cn from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={clsx(cn.footer, ucn['container-padding'])}>
      <ColorSchemeToggle />
    </footer>
  )
}
