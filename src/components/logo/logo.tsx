import { Anchor } from '@mantine/core'
import Link from 'next/link'
import cn from './logo.module.css'

export const Logo = () => {
  return (
    <Anchor component={Link} href="/" className={cn.logo} underline="never">
      arsam.dev
    </Anchor>
  )
}
