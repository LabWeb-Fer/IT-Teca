// import express from "express";
// import { json } from "body-parser";

// const app = express();
// app.use(json());

// // Rutas
// app.post("/register", async (req, res) => {
//   // Usá el caso de uso `RegisterUser`
// });

// app.listen(3000, () => {
//   console.log("API corriendo en http://localhost:3000");
// });


import express from 'express';
import { RegisterUser } from '../../domain/src/use-cases/register-user/RegisterUser.js';
import { InMemoryUserRepository } from './src/repositories/InMemoryUserRepository.ts';

const app = express();
app.use(express.json());

const userRepo = new InMemoryUserRepository();
const registerUser = new RegisterUser(userRepo);

app.post("/register", async (req, res) => {
  try {
    const user = await registerUser.execute(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

app.listen(3000, () => {
  console.log("API corriendo en http://localhost:3000");
});
