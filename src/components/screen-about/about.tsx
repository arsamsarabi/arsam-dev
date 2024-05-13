import cn from './about.module.css'
import { About, Experiences, Hobbies, Projects, Tools } from './components'

export const AboutScreen = () => {
  return (
    <div className={cn.wrapper}>
      <About />
      <Experiences />
      <Projects />
      <Tools />
      <Hobbies />
    </div>
  )
}
