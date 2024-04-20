import { SocialLink } from './social-link'
import cn from './socials.module.css'

export const Socials = () => {
  return (
    <div className={cn.wrapper}>
      <SocialLink
        href="https://github.com/arsamsarabi/arsam-dev"
        name="github"
      />
      <SocialLink href="https://linkedin.com/in/arsam" name="linkedin" />
      <SocialLink
        href="https://www.instagram.com/arsamsarabi/"
        name="instagram"
      />
    </div>
  )
}
