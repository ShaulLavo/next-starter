


// try {
// 	const sqlite3InitModule = await import('@sqlite.org/sqlite-wasm');
// 	console.log('sqlite3InitModule', sqlite3InitModule);
// } catch (err) {
// 	console.error('error', err);
// }
// const log = console.log;
// const error = console.error;
// log('Running SQLite3 !!!!!!!');
// const start = (sqlite3) => {
// 	log('Running SQLite3 version', sqlite3.version.libVersion);
// 	const db =
// 		'opfs' in sqlite3
// 			? new sqlite3.oo1.OpfsDb('/mydb.sqlite3')
// 			: new sqlite3.oo1.DB('/mydb.sqlite3', 'ct');
// 	log(
// 		'opfs' in sqlite3
// 			? `OPFS is available, created persisted database at ${db.filename}`
// 			: `OPFS is not available, created transient database ${db.filename}`
// 	);
// };

// const initializeSQLite = async () => {
// 	try {
// 		log('Loading and initializing SQLite3 module...');
// 		const sqlite3 = await sqlite3InitModule({ print: log, printErr: error });
// 		log('Done initializing. Running demo...');
// 		start(sqlite3);
// 	} catch (err) {
// 		error('Initialization error:', err);
// 	}
// };

// initializeSQLite();
