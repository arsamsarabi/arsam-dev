'use client'

import { Image, Space } from '@mantine/core'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { BlogPostsPreview } from '#/components/blog-posts-preview'
import ucn from '#/styles/utility-classes.module.css'
import { fadeInProps } from '#/styles/utils'
import { MotionText } from '../motion/motion-text'
import cn from './home.module.css'

export const HomeScreen = () => {
  return (
    <div className={clsx(cn.wrapper, ucn['container-padding'])}>
      <motion.picture className={cn.image} {...fadeInProps}>
        <Image alt="arsam" src="/images/arsam.JPG" radius="md" />
      </motion.picture>

      <Space h="md" />

      <MotionText className={cn.description} {...fadeInProps}>
        Hi, I&apos;m <span className={cn.name}>Arsam</span>! I&apos;m a software
        engineer, product maker, and a life-long learner. I make products from
        scratch, and bring ideas to life!
      </MotionText>

      <Space h="md" />

      <BlogPostsPreview />
    </div>
  )
}
