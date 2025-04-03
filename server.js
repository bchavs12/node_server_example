import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Corrigir `__dirname` para ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Criação do servidor HTTP
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html'); // Define o caminho do arquivo HTML

  // Lê o arquivo HTML
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('Erro ao carregar a página.')
    }
  })

})