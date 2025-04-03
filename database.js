import sqllite3 from 'sqlite3';
import { open } from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Corrigir `__dirname` para ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Abre conexão com o banco de dados SQLite
export async function openDB() {
  return open({
    filename: path.join(__dirname, 'database.db'),
    driver: sqllite3.Database
  });
}

// Função para criar a tabela (executar apenas uma vez)
(async () => {
  const db = await openDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS produtos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      preco REAL
    )
    `)
  console.log("Banco de dados inicializado!");
})();