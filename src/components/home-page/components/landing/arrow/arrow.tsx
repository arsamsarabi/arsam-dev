'use client'

import { motion } from 'framer-motion'
import { Icon } from '#/components/icon'
import cn from './arrow.module.css'

export const Arrow = () => {
  return (
    <motion.div
      animate={{
        transform: [
          'translateX(-50%) translateY(0)',
          'translateX(-50%) translateY(-50%)',
        ],
      }}
      className={cn.arrow}
      transition={{
        type: 'spring',
        easing: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <Icon name="arrow-big-down" className={cn.arrow__icon} />
    </motion.div>
  )
}
