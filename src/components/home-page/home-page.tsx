import { Avatar, Image, Text } from '@mantine/core'
import clsx from 'clsx'
import ucn from '#/styles/utility-classes.module.css'
import cn from './home-page.module.css'

export const HomePage = () => {
  return (
    <div className={clsx(cn.wrapper, ucn['container-padding'])}>
      <Avatar
        alt="arsam"
        autoContrast
        classNames={{ root: cn.avatar__root, image: cn.avatar__image }}
        size={120}
        src="/images/arsam.JPG"
      />
      <Text>Hi I&apos;m Arsam!</Text>
      <Text>
        I&apos;m a software engineer, product maker, and a life-long learner. I
        make products from scratch, and bring ideas to life!
      </Text>
    </div>
  )
}
