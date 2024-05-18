import { routes } from '#/utils/routing'
import { MobileNavLink } from '../mobile-nav-link'

export const LinkList = () => {
  return (
    <>
      {routes.map(({ path, label, icon }) => (
        <MobileNavLink key={path} href={path} label={label} icon={icon} />
      ))}
    </>
  )
}
