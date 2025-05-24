import { localDb as db } from '@/db/localDb'
import { cacheTable } from '@/db/schema'
import { eq, sql } from 'drizzle-orm'

export const sqlocalStorage = {
	async getItem(key: string): Promise<string | null> {
		const result = await db
			.select({ value: cacheTable.value })
			.from(cacheTable)
			.where(eq(cacheTable.key, key))
			.limit(1)
		if (result.length > 0) {
			return result[0].value
		}
		return null
	},

	async setItem(key: string, value: string): Promise<void> {
		await db
			.insert(cacheTable)
			.values({ key, value, updatedAt: new Date().toISOString() })
			.onConflictDoUpdate({
				target: cacheTable.key,
				set: { value, updatedAt: new Date().toISOString() }
			})
	},

	async removeItem(key: string): Promise<void> {
		await db.delete(cacheTable).where(eq(cacheTable.key, key))
	},

	async clear(): Promise<void> {
		await db.delete(cacheTable)
	},

	async key(index: number): Promise<string | null> {
		const result = await db
			.select({ key: cacheTable.key })
			.from(cacheTable)
			.orderBy(cacheTable.key)
			.limit(1)
			.offset(index)
		if (result.length > 0) {
			return result[0].key
		}
		return null
	},

	async length(): Promise<number> {
		const result = await db.select({ count: sql`count(*)` }).from(cacheTable)
		return result[0] ? Number(result[0].count) : 0
	}
}
