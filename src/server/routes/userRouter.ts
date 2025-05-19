import { Hono } from 'hono'

export type User = {
	id: number
	name: string
}

const users: User[] = [
	{
		id: 1,
		name: 'John'
	},
	{
		id: 2,
		name: 'Carlo'
	}
]

export const userRouter = new Hono()
	.get(
		'/',
		// zValidator(
		// 	'json',
		// 	z.object({
		// 		id: z.number()
		// 	})
		// ),
		async c => {
			return c.json({
				users: users
			})
		}
	)
	.get('/hello', async c => {
		return c.json({
			message: 'Hello from HONO! :)' as const
		})
	})
	.get('/:id', async c => {
		const id = c.req.param('id')

		if (!id) throw Error('No Id found.')

		let _id: number
		try {
			_id = parseInt(id)
		} catch {
			throw Error('Invalid Id. Must be int.')
		}

		const user = users.find(u => u.id === _id)

		if (!user) throw Error('User not found.')

		return c.json(user)
	})
