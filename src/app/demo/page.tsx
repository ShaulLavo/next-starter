import { Hello } from '@/components/hello'
import { HelloClient } from '@/components/helloClient'
import { getUsers } from '@/services/user'
import {
	dehydrate,
	HydrationBoundary,
	QueryClient
} from '@tanstack/react-query'

export default async function Home() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['users'],
		queryFn: getUsers
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<div className="w-full items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start">
					<Hello />
					<HelloClient />
				</main>
			</div>
		</HydrationBoundary>
	)
}
