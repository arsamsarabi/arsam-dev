'use client'

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import cn from '#/styles/utility-classes.module.css'
import { AppIcon } from '../app-icon'

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
      size="sm"
      variant="subtle"
    >
      <AppIcon
        className={cn['dark-only']}
        color="var(--mantine-color-yellow-3)"
        name="sun"
      />
      <AppIcon
        className={cn['light-only']}
        color="var(--mantine-color-black)"
        name="moon"
      />
    </ActionIcon>
  )
}
