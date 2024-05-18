type BlogPost = {
  dateAdded: string
  excerpt: string
  imageUrl: string
  minutes: number
  slug: string
  title: string
  words: number
}

export const mockBlogPosts: BlogPost[] = [
  {
    dateAdded: '18-05-2024',
    excerpt:
      'Totam fugit tenetur sit fuga. Ducimus voluptas dignissimos tempora consequuntur et magnam qui laborum. Eveniet molestias dolor sit voluptates fuga voluptate ratione aspernatur molestias.',
    imageUrl: '',
    minutes: 10,
    slug: 'voluptas-culpa-cumque',
    title: 'Blog Post 1',
    words: 120,
  },
  {
    dateAdded: '02-05-2024',
    excerpt:
      'Doloremque id dolorem ut quia ut sit nesciunt occaecati assumenda.Corrupti magnam repellendus vero adipisci. Tenetur tempora aut ea sed. Qui autem autem reiciendis. Aut quia quia voluptas nemo fugiat voluptas maiores delectus voluptates. Cumque dignissimos beatae quaerat.',
    imageUrl: '',
    minutes: 12,
    slug: 'natus-est-eos',
    title: 'Blog Post 2',
    words: 150,
  },
  {
    dateAdded: '17-04-2024',
    excerpt:
      'Consequatur occaecati sunt.Sit veritatis deleniti est at officia. Dolorem magnam voluptatem impedit nostrum et impedit atque voluptas aut. Voluptates temporibus qui magni itaque ex est. Dolorem asperiores eos quod dolor expedita qui doloremque. Consequuntur est explicabo beatae sit.',
    imageUrl: 'asperiores-adipisci-sapiente',
    minutes: 15,
    slug: '',
    title: 'Blog Post 3',
    words: 200,
  },
]
