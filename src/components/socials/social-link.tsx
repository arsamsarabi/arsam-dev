import { Center } from '@mantine/core'
import clsx from 'clsx'
import Link from 'next/link'
import { Icon, type Icons } from '#/components/icon'
import cn from './socials.module.css'

export type SocialLinkProps = {
  href: string
  name: Icons
}

export const SocialLink = ({ href, name }: SocialLinkProps) => {
  return (
    <Link href={href} target="_blank">
      <Center>
        <Icon className={clsx(cn.link, cn[name])} name={name} stroke={1.6} />
      </Center>
    </Link>
  )
}
