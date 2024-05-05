import { Avatar, Space, Text } from '@mantine/core'
import { Section } from '../section'
import { Arrow } from './arrow'
import cn from './landing.module.css'

export const Landing = () => {
  return (
    <Section className={cn.wrapper}>
      <Avatar
        alt="arsam"
        autoContrast
        classNames={{ root: cn.avatar__root, image: cn.avatar__image }}
        size={120}
        src="/images/arsam.JPG"
      />

      <Space h="md" />

      <Text>Hi I&apos;m Arsam!</Text>

      <Space h="sm" />

      <Text>
        I&apos;m a software engineer, product maker, and a life-long learner. I
        make products from scratch, and bring ideas to life!
      </Text>

      <Arrow />
    </Section>
  )
}
