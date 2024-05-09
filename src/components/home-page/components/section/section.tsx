import clsx from 'clsx'
import { type ComponentProps, type PropsWithChildren } from 'react'
import ucn from '#/styles/utility-classes.module.css'
import cn from './section.module.css'

type Props = ComponentProps<'section'>

export const Section = ({
  children,
  className,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <section
      className={clsx(ucn['container-padding'], cn.wrapper, className)}
      {...rest}
    >
      {children}
    </section>
  )
}
