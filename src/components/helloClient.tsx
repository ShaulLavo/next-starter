'use client'
import { User } from '@/server/routes/userRouter'
import { getUsers } from '@/services/user'
import { hc } from '@/utils/honoClient'
import { useQuery } from '@tanstack/react-query'

export function HelloClient(props: { users?: User[] }) {
	const { data } = useQuery({
		queryKey: ['users'],
		queryFn: getUsers,
		initialData: props.users
	})

	const { data: helloData } = useQuery({
		queryKey: ['hello'],
		queryFn: async () => {
			const res = await hc.users.hello.$get()
			const data = await res.json()
			return data
		}
	})

	return (
		<>
			<h1>client component:</h1>
			<div>
				pre fetched:
				<p className="font-bold tracking-tighter ">
					{!data ? 'Loading...' : JSON.stringify(data)}
				</p>
			</div>
			<div>
				not prefetched:
				<p className="font-bold tracking-tighter ">
					{!helloData ? 'Loading...' : helloData.message}
				</p>
			</div>
		</>
	)
}
