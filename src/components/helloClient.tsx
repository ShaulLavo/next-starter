'use client'
import { User } from '@/server/routes/userRouter'
import { getUsers } from '@/services/user'
import { hc } from '@/lib/honoClient'
import { useQuery } from '@tanstack/react-query'
import { localDb } from '@/db/localDb'
import { cacheTable } from '@/db/schema'
import { CodeBlock } from './ui/code-block'

async function getCache() {
	const result = await localDb
		.select({
			key: cacheTable.key,
			value: cacheTable.value,
			updatedAt: cacheTable.updatedAt
		})
		.from(cacheTable)
		.orderBy(cacheTable.key)
	return result
}

export function HelloClient(props: { users?: User[] }) {
	const { data: userData } = useQuery({
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

	const { data: cacheData } = useQuery({
		queryKey: ['cache'],
		queryFn: getCache
	})

	return (
		<>
			<h1>client component:</h1>
			<div>
				pre fetched:
				<div className="font-bold tracking-tighter ">
					{!userData ? (
						'Loading...'
					) : (
						<CodeBlock
							code={JSON.stringify(userData, null, 2)}
							language="json"
							filename="users"
							lightTheme="github-light"
							darkTheme="github-dark"
						/>
					)}
				</div>
			</div>
			<div>
				not prefetched:
				<p className="font-bold tracking-tighter ">
					{!helloData ? 'Loading...' : helloData.message}
				</p>
			</div>
			<div>
				cache data (from the client cache via - SQL light on OPFS):
				<div className="font-bold tracking-tighter ">
					{!cacheData ? (
						'Loading...'
					) : (
						<CodeBlock
							code={JSON.stringify(JSON.parse(cacheData[0].value), null, 2)}
							language="json"
							filename="cache.json"
							lightTheme="github-light"
							darkTheme="github-dark"
							height="400px"
						/>
					)}
				</div>
			</div>
		</>
	)
}
