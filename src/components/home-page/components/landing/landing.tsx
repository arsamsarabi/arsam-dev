import { Image, Space, Text, Title } from '@mantine/core'
import { Section } from '../section'
import { Arrow } from './arrow'
import cn from './landing.module.css'

export const Landing = () => {
  return (
    <Section className={cn.wrapper}>
      <picture className={cn.image}>
        <Image alt="arsam" src="/images/arsam.JPG" radius="md" />
      </picture>

      <Space h="md" />

      <Title className={cn.title}>Hi, I&apos;m Arsam!</Title>

      <Space h="sm" />

      <Text>
        I&apos;m a software engineer, product maker, and a life-long learner. I
        make products from scratch, and bring ideas to life!
      </Text>

      <Arrow />
    </Section>
  )
}
