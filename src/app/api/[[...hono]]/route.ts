import { appRouter } from '@/server/app'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.route('/', appRouter)

export const GET = handle(app)
export const POST = handle(app)
