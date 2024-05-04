import { Text } from '@mantine/core'
import clsx from 'clsx'
import ucn from '#/styles/utility-classes.module.css'
import cn from './blog-page.module.css'

export const BlogPage = () => {
  return (
    <div className={clsx(cn.wrapper, ucn['container-padding'])}>
      <Text>Blog!</Text>
    </div>
  )
}
