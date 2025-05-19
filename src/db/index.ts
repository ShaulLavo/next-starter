import { SQLocalDrizzle } from 'sqlocal/drizzle'
import { drizzle } from 'drizzle-orm/sqlite-proxy'

const { driver, batchDriver } = new SQLocalDrizzle('database.sqlite3')
export const localDb = drizzle(driver, batchDriver)
