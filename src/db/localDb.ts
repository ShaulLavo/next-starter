import { SQLocalDrizzle } from 'sqlocal/drizzle'
import { drizzle } from 'drizzle-orm/sqlite-proxy'
import { sql } from 'drizzle-orm'
import { cacheTable } from './schema'
const { driver, batchDriver } = new SQLocalDrizzle('database.sqlite3')
export const localDb = drizzle(driver, batchDriver)

async function ensureCacheTableExists() {
	const createTableQuery = sql`
    CREATE TABLE IF NOT EXISTS cache (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `

	try {
		await localDb.run(createTableQuery)
		console.log("Table 'cache' is ready.")
	} catch (error) {
		console.error("Error creating or verifying 'cache' table:", error)

		throw error
	}
}

;(async () => {
	try {
		console.log(cacheTable.getSQL())
		if (typeof window === 'undefined') return
		await ensureCacheTableExists()
	} catch (error) {
		console.error('Application startup failed:', error)
		process.exit(1)
	}
})()
