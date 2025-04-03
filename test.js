'use strict';
import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync(':memory:');

// Execute SQL statements from strings.
database.exec(`
  CREATE TABLE data(
    id INTEGER PRIMARY KEY,
    value TEXT,
  ) STRICT
`);

// Create a prepared statement to insert data into the database
const insert = database.prepare('INSERT INTO data (id, value) VALUES (?, ?)');

// Execute the prepared statement to read data from the database.
insert.run(1, 'Hello');
insert.run(2, 'World');

// Create prepared statement to read data from the database
const query = database.prepare('SELECT * FROM data ORDER BY id');

// Execute the prepared statement and Log the result set
console.log(query.all());