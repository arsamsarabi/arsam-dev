import { useComputedColorScheme } from '@mantine/core'

export const useIsDark = () => {
  const computedColorScheme = useComputedColorScheme()

  return computedColorScheme === 'dark'
}
