import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_VERCEL_ENV: z
      .enum(['development', 'preview', 'production', 'test'])
      .optional()
      .default('development'),
    NEXT_PUBLIC_VERCEL_BRANCH_URL: z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
    NEXT_PUBLIC_VERCEL_BRANCH_URL: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL,
  },
})
