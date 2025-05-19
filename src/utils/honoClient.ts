import { AppRouter } from '@/server/app'
import { hc as honoClient } from 'hono/client'

export const hc = honoClient<AppRouter>(
	process.env.NEXT_PUBLIC_BASE_URL! + '/api'
)
