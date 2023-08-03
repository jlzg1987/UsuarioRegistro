const express = require("express");
const db = require("./utils/database");
const initModels = require('./models/initModels')

const app = express();

const PORT = 8000;
initModels();


db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));
db.sync({ force: false })
  .then(() => console.log("sincronizado db"))
  .catch((err) => console.log('Error de sincronización', err))


app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});