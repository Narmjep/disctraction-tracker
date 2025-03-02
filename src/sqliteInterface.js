const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const db_path = "data.db";
let db;

async function openDB() {
    db =  await  open({
        filename: db_path,
        driver: sqlite3.Database
    });
    
    return db;
}

async function runQuery(query, params = []) {
    if (!db) {
        throw new Error("Database needs to be initialized first");
    }
    try{
        return await db.all(query, params);
    } catch (e) {
        console.log("Failed to run query: ", query, e);
        throw e;
    }
    
}

async function initializeDB() {
    db = await openDB();
    if (!db) {
        throw new Error("Database could not be initialized");
    }
    await runQuery(createTables);
}

// Queries

const createTables = `
    CREATE TABLE IF NOT EXISTS counters (id INTEGER PRIMARY KEY, label TEXT UNIQUE NOT NULL, count INTEGER);
    CREATE TABLE IF NOT EXISTS distractions (id INTEGER PRIMARY KEY, timestamp INTEGER, counter INTEGER, FOREIGN KEY(counter) REFERENCES counters(id));
`;

module.exports = { openDB , runQuery, initializeDB };