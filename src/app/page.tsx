import { Text } from '@mantine/core'
import { env } from '~/utils/env'

export default function Home() {
  console.log('Vercel environment variables')
  console.log(env)
  return (
    <>
      <Text>Home page</Text>
    </>
  )
}
