import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'
import type { PropsWithChildren } from 'react'
import cn from './anchor.module.css'

type Props = LinkProps & {
  className?: string
  external?: boolean
}

export const Anchor = ({
  children,
  className,
  external = false,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <Link
      className={clsx(cn.anchor, className)}
      target={external ? '_blank' : ''}
      {...rest}
    >
      {children}
    </Link>
  )
}
