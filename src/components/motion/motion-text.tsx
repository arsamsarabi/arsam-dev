import { Text, TextProps } from '@mantine/core'
import { motion } from 'framer-motion'
import React from 'react'

type Props = TextProps & { children?: React.ReactNode }

const TextRef = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }, ref) => {
    return (
      <Text ref={ref} {...rest}>
        {children}
      </Text>
    )
  }
)

TextRef.displayName = 'TextRef'

export const MotionText = motion(TextRef)
