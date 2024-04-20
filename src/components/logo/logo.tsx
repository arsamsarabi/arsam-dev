import { Title } from '@mantine/core'
import Link from 'next/link'
import cn from './logo.module.css'

export const Logo = () => {
  return (
    <Link href="/" className={cn.link}>
      <Title className={cn.logo}>arsam.dev</Title>
    </Link>
  )
}
