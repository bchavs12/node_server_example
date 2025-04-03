import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Corrigir `__dirname` para ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Criação do servidor HTTP
const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url); // Define o caminho do arquivo HTML

  // Verifica se o arquivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      filePath = path.join(__dirname, '404.html');
      res.writeHead(404, { 'content-type': 'text/html' });
    }

    // Lê e retorna o arquivo correto
    fs.readFile(filePath, (err, data) => {
      if (err) {
        fs.readFile(path.join(__dirname, '500.html'), (error500, data500) => {
          res.writeHead(500, { 'content-type': 'text/html' });
          res.end(error500 ? 'Erro interno do servidor' : data500);
        });
      } else {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(data);
      }
    });
  });
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});