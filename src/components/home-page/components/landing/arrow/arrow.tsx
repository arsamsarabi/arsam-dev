'use client'

import { motion } from 'framer-motion'
import { Icon } from '#/components/icon'
import cn from './arrow.module.css'

export const Arrow = () => {
  return (
    <motion.div
      animate={{
        transform: [
          ' translateX(-50%) translateY(-50%)',
          'translateX(-50%) translateY(10%)',
        ],
        opacity: [0.25, 0.5],
      }}
      className={cn.arrow}
      transition={{
        transform: {
          duration: 1.25,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0.125,
        },
        opacity: {
          duration: 1.25,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
    >
      <Icon name="arrow-big-down" className={cn.arrow__icon} />
    </motion.div>
  )
}
