'use client'

import { Text } from '@mantine/core'
import Lottie from 'react-lottie'
import { Anchor } from '#/components/anchor'
import { Section } from '../section'
import * as animationLight from './animation-light.json'

const FROM_DATE = new Date('2012-06-19')
const TO_DATE = new Date()
const YEARS = Math.abs(FROM_DATE.getFullYear() - TO_DATE.getFullYear())

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationLight,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const About = () => {
  return (
    <Section>
      <Lottie options={animationOptions} height={300} width={300} />
      <Text>
        I am a Senior Software Engineer with over {YEARS} of experience in
        developing and delivering complex software solutions.
        <br />
        I am proficient in modern frontend technologies and frameworks,
        including React, and NextJs. I also have the experience of working with
        backend languages and technologies such as Python, and Node.js.
        <br />I am currently a part of the engineering team at MOO, building
        MOO&apos;s new{' '}
        <Anchor href="https://beta.moo.com" external>
          branded merch storefront.
        </Anchor>
      </Text>
    </Section>
  )
}
