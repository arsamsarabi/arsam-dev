'use client'

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import cn from '~/styles/utility-classes.module.css'
import { Icon } from '../icon'

export const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme()

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ActionIcon
      aria-label="Toggle color scheme"
      onClick={toggleColorScheme}
      size="xs"
      variant="subtle"
    >
      <Icon
        className={cn['dark-only']}
        color="var(--mantine-color-yellow-3)"
        name="sun"
      />
      <Icon
        className={cn['light-only']}
        color="var(--mantine-color-dark-3)"
        name="moon"
      />
    </ActionIcon>
  )
}
