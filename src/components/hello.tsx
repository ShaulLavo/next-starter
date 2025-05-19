import { hc } from '@/utils/honoClient'
console.log(process.env.NEXT_PUBLIC_BASE_URL!)
export async function Hello() {
	const res = await hc.users.hello.$get()
	const { message } = await res.json()
	return (
		<p className="font-bold tracking-tighter ">
			{!message ? 'Loading...' : message}
		</p>
	)
}
