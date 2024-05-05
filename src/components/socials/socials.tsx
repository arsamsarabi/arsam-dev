import { SocialLink } from './social-link'
import cn from './socials.module.css'

export const Socials = () => {
  return (
    <div className={cn.wrapper}>
      <SocialLink
        name="github"
        href="https://github.com/arsamsarabi/arsam-dev"
      />
      <SocialLink name="linkedin" href="https://linkedin.com/in/arsam" />
      <SocialLink
        name="instagram"
        href="https://www.instagram.com/arsamsarabi/"
      />
    </div>
  )
}
