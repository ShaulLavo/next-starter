'use client'
import { User } from '@/server/routes/userRouter'
import { getUsers } from '@/services/user'
import { hc } from '@/lib/honoClient'
import { useQuery } from '@tanstack/react-query'
import { localDb } from '@/db/localDb'
import { cacheTable } from '@/db/schema'
import { CodeBlock } from './ui/code-block'
import Editor, {
	DiffEditor,
	useMonaco,
	loader,
	OnMount
} from '@monaco-editor/react'

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
const handleEditorDidMount: OnMount = editor => {
	// if you need to tweak options post-mount
	editor.updateOptions({
		minimap: { enabled: false },
		lineNumbers: 'off'
	})
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
				<div className="font-bold tracking-tighter w-full">
					{!userData ? (
						'Loading...'
					) : (
						<Editor
							defaultLanguage="json"
							defaultValue={JSON.stringify(userData, null, 2)}
							height="10vh"
							options={{
								minimap: { enabled: false },
								lineNumbers: 'off'
							}}
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
					{!cacheData?.[0] ? (
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
