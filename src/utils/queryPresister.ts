import { localDb } from '@/db'
import { cacheTable } from '@/db/schema'
import {
	PersistedClient,
	Persister
} from '@tanstack/react-query-persist-client'

import { eq } from 'drizzle-orm'

async function setCache(key: string, value: string) {
	await localDb
		.insert(cacheTable)
		.values({ key, value, updatedAt: new Date().toISOString() })
		.onConflictDoUpdate({
			target: cacheTable.key,
			set: { value, updatedAt: new Date().toISOString() }
		})
	console.log(`Set cache for key: ${key}`)
}

async function getCache(key: string): Promise<string | null> {
	const result = await localDb
		.select({ value: cacheTable.value })
		.from(cacheTable)
		.where(eq(cacheTable.key, key))
		.limit(1)

	if (result.length > 0) {
		return result[0].value
	}
	return null
}

async function deleteCache(key: string) {
	await localDb.delete(cacheTable).where(eq(cacheTable.key, key))
	console.log(`Deleted cache for key: ${key}`)
}

export function createSQLPersister(key: string = 'reactQuery') {
	return {
		persistClient: async (client: PersistedClient) => {
			await setCache(key, JSON.stringify(client))
		},
		restoreClient: async () => {
			const cache = await getCache(key)
			if (!cache) return
			return JSON.parse(cache) as PersistedClient
		},
		removeClient: async () => {
			await deleteCache(key)
		}
	} satisfies Persister
}
