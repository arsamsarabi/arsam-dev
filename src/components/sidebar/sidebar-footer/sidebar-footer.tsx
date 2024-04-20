import { Space } from '@mantine/core'
import clsx from 'clsx'
import { ColorSchemeToggle } from '#/components/color-scheme-toggle'
import { Socials } from '#/components/socials'
import ucn from '#/styles/utility-classes.module.css'
import cn from './sidebar-footer.module.css'

export const SidebarFooter = () => {
  return (
    <div className={clsx(cn.wrapper, ucn['container-padding'])}>
      <Socials />
      <Space w="sm" />
      <ColorSchemeToggle />
    </div>
  )
}
