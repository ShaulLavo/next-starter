/// https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr

'use client'

// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import { sqlocalStorage } from '@/lib/sqlocalStorage'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'

import { PropsWithChildren } from 'react'

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				// With SSR, we usually want to set some default staleTime
				// above 0 to avoid refetching immediately on the client
				staleTime: 60 * 1000
			}
		}
	})
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
	if (typeof window === 'undefined') {
		// Server: always make a new query client
		return makeQueryClient()
	} else {
		// Browser: make a new query client if we don't already have one
		// This is very important so we don't re-make a new client if React
		// supsends during the initial render. This may not be needed if we
		// have a suspense boundary BELOW the creation of the query client
		if (!browserQueryClient) browserQueryClient = makeQueryClient()
		return browserQueryClient
	}
}

// const syncPersister = createSyncStoragePersister({
// 	storage: typeof window !== 'undefined' ? window.localStorage : undefined
// })

const asyncPersister = createAsyncStoragePersister({
	storage: sqlocalStorage
})

export default function QueryProvider({ children }: PropsWithChildren) {
	// NOTE: Avoid useState when initializing the query client if you don't
	//       have a suspense boundary between this and the code that may
	//       suspend because React will throw away the client on the initial
	//       render if it suspends and there is no boundary
	const queryClient = getQueryClient()

	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{ persister: asyncPersister }}
		>
			{children}
		</PersistQueryClientProvider>
	)
}
