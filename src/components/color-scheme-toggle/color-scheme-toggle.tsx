'use client'

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { Icon } from '#/components/icon'
import cn from '#/styles/utility-classes.module.css'

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
      <Icon
        className={cn['dark-only']}
        color="var(--mantine-color-yellow-3)"
        name="sun"
      />
      <Icon
        className={cn['light-only']}
        color="var(--mantine-color-gray-7)"
        name="moon"
      />
    </ActionIcon>
  )
}
