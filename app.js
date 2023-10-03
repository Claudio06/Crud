const cors = require("cors");
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparse = require("body-parser");
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyparse.json());
app.use(express.json());
app.use(express.text());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use("/persona/", require("./Routes/routesPersona.js"));
app.use("/auth", require("./Routes/auth.js"));
app.use("/user", require("./Routes/userRouter.js"));

// app.use((req, res, next) => {

//     // Dominio que tengan acceso (ej. 'http://example.com')
//        res.setHeader('Access-Control-Allow-Origin', '*');

//     // Metodos de solicitud que deseas permitir
//        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

//     // Encabecedados que permites (ej. 'X-Requested-With,content-type')
//        res.setHeader('Access-Control-Allow-Headers', '*');

//     next();
//     })

app.get("/", (req, res, next) => {
  res.send("Hola mundo");
  next();
});

const iniciar = async () => {
  await mongoose.connect(process.env.Url_Compass);
  app.listen(PORT, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running on port http://localhost:${PORT}`);
  });
};
iniciar();
