import { Anchor } from '@mantine/core'
import clsx from 'clsx'
import Link from 'next/link'
import cn from './logo.module.css'

type Props = {
  invert?: boolean
}

export const Logo = ({ invert = false }: Props) => {
  return (
    <Anchor
      component={Link}
      href="/"
      className={clsx(cn.anchor, { [`${cn.anchor__invert}`]: invert })}
      underline="never"
    >
      arsam.dev
    </Anchor>
  )
}
