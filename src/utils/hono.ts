import { AppRouter } from '@/server/app'
import { hc } from 'hono/client'

export const hono = hc<AppRouter>(process.env.NEXT_PUBLIC_BASE_URL! + '/api')
