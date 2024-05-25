import { Title } from '@mantine/core'
import { formatDate } from '#/utils/format-date'
import cn from './blog-posts-preview.module.css'

export type PostPreviewProps = {
  dateAdded: string
  excerpt: string
  imageUrl: string
  minutes: number
  slug: string
  title: string
  words: number
}

export const PostPreview = ({
  dateAdded,
  excerpt,
  imageUrl,
  minutes,
  slug,
  title,
  words,
}: PostPreviewProps) => (
  <div key={slug} className={cn['post-preview__wrapper']}>
    <Title order={3}>{title}</Title>
    <p>{excerpt}</p>
    <p>{formatDate(dateAdded)}</p>
    <img src={imageUrl} style={{ width: '100%' }} />
    <p>{minutes}minutes read</p>
    <p>{words} words</p>
  </div>
)
