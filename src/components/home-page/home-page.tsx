import clsx from 'clsx'
import ucn from '#/styles/utility-classes.module.css'
import {
  About,
  Contact,
  Experiences,
  Hobbies,
  Landing,
  Projects,
  Tools,
} from './components'
import cn from './home-page.module.css'

export const HomePage = () => {
  return (
    <div className={clsx(cn.wrapper, ucn['container-padding'])}>
      <Landing />
      <About />
      <Experiences />
      <Projects />
      <Tools />
      <Hobbies />
      <Contact />
    </div>
  )
}
