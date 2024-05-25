import { Button, Group, Image, Text, Title } from '@mantine/core'
import Link from 'next/link'
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
    <Group justify="space-between" mb="sm">
      <Title order={3}>{title}</Title>
      <Text size="sm" c="var(--mantine-color-primary-3)">
        {formatDate(dateAdded)}
      </Text>
    </Group>

    <Group justify="flex-start" mb="sm" dir="row">
      <Image src={imageUrl} style={{ width: '100%', height: '100%' }} />
      <Text lineClamp={5}>{excerpt}</Text>
    </Group>

    <Group justify="space-between" mb="md">
      <Text c="var(--mantine-color-primary-3)">{minutes}m read</Text>
      <Text c="var(--mantine-color-primary-3)">{words} words</Text>
    </Group>

    <Button component={Link} href={`/blog/${slug}`} fullWidth>
      Read more
    </Button>
  </div>
)
