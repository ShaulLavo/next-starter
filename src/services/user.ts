import { User } from '@/server/routes/userRouter'
import { hc } from '@/lib/honoClient'

export async function getUser(id: number) {
	const res = await hc.users[':id'].$get({
		param: {
			id: id.toString()
		}
	})

	if (res.ok) {
		const data = await res.json()

		return data
	}

	return null
}

export async function getUsers(): Promise<User[] | null> {
	const res = await hc.users.$get()

	if (res.ok) {
		const { users } = await res.json()

		return users
	}

	return null
}
