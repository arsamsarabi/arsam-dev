import clsx from 'clsx'
import { type ComponentProps, type PropsWithChildren } from 'react'
import cn from './section.module.css'

type Props = ComponentProps<'section'>

export const Section = ({
  children,
  className,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <section className={clsx(cn.wrapper, className)} {...rest}>
      {children}
    </section>
  )
}
