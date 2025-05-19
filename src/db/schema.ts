import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const cacheTable = sqliteTable('cache', {
	key: text('key').primaryKey(),

	value: text('value').notNull(),

	createdAt: text('created_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),

	updatedAt: text('updated_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
})
