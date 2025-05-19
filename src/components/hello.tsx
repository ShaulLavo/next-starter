import { hono } from '@/utils/hono'
console.log(process.env.NEXT_PUBLIC_BASE_URL!)
export async function Hello() {
	const url = hono.users.hello.$url()
	console.log(url)
	const res = await hono.users.hello.$get()
	// console.log(data)
	const { message } = await res.json()
	return (
		<p className="font-bold tracking-tighter ">
			{!message ? 'Loading...' : message}
		</p>
	)
}
