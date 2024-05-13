import { NavLink } from './nav-link'
import cn from './nav.module.css'

export const Nav = () => {
  return (
    <nav className={cn.nav}>
      <NavLink href="/about" size="sm">
        About
      </NavLink>

      <NavLink href="/blog" size="sm">
        Blog
      </NavLink>

      <NavLink href="/contact" size="sm">
        Contact
      </NavLink>
    </nav>
  )
}
