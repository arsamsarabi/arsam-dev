import { Center } from '@mantine/core'
import Link from 'next/link'
import { AppIcon, type Icons } from '../app-icon'
import cn from './socials.module.css'

type Props = {
  href: string
  name: Icons
}

export const SocialLink = ({ href, name }: Props) => {
  return (
    <Link href={href} target="_blank">
      <Center>
        <AppIcon className={cn.socials__link} name={name} stroke={1.6} />
      </Center>
    </Link>
  )
}
