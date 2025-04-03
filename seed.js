import { openDB } from "./database.js";

(async () => {
  const db = await openDB();

  await db.run(`INSERT INTO produtos (nome, preco) VALUES ('Bicicleta Speed', 2500.99)`);
  await db.run(`INSERT INTO produtos (nome, preco) VALUES ('Bicicleta MTB', 3200.50)`);

  console.log("Dados inseridos!");
})();