import { Title } from '@mantine/core'
import { mockBlogPosts } from '#/mocks/blog'

export const BlogPostsPreview = () => {
  return (
    <>
      <Title order={2}>Latest blog posts</Title>
      {mockBlogPosts.map(
        ({ dateAdded, excerpt, imageUrl, minutes, slug, title, words }) => (
          <div key={slug}>
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <p>{dateAdded}</p>
            <p>{imageUrl}</p>
            <p>{minutes}</p>
            <p>{words}</p>
          </div>
        )
      )}
    </>
  )
}
