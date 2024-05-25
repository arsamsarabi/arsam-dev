import { Divider, Title } from '@mantine/core'
import { mockBlogPosts } from '#/mocks/blog'
// import { formatDate } from '#/utils/format-date'
import cn from './blog-posts-preview.module.css'
import { PostPreview } from './post-preview'

export const BlogPostsPreview = () => {
  return (
    <div className={cn.wrapper}>
      <Title className={cn.title} order={2}>
        Latest blog posts
      </Title>

      <Divider />

      <div className={cn.posts_wrapper}>
        {mockBlogPosts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}
