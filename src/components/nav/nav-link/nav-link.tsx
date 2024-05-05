import { Anchor, type AnchorProps } from '@mantine/core'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import cn from './nav-link.module.css'

export type NavLinkProps = AnchorProps & {
  href: string
}

export const NavLink = ({
  className,
  children,
  ...rest
}: PropsWithChildren<NavLinkProps>) => {
  return (
    <Anchor className={clsx(cn.anchor, className)} {...rest}>
      {children}
    </Anchor>
  )
}
