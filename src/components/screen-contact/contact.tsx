import { Text } from '@mantine/core'
import clsx from 'clsx'
import ucn from '#/styles/utility-classes.module.css'
import cn from './contact.module.css'

export const ContactScreen = () => {
  return (
    <div className={clsx(cn.wrapper, ucn['container-padding'])}>
      <Text>Contact!</Text>
    </div>
  )
}
