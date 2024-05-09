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
    <div className={cn.wrapper}>
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
