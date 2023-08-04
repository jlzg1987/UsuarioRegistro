const express = require("express");
const cors = require("cors")
const morgan = require("morgan");

const db = require("./utils/database");
const initModels = require('./models/initModels')
const userRoute = require("./routes/user.routes");
const loginRoute = require("./routes/login.routes");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
const PORT = 8000;
initModels();


db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));
db.sync({ force: false })
  .then(() => console.log("sincronizado db"))
  .catch((err) => console.log('Error de sincronización', err))

app.use(userRoute);
app.use(loginRoute);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});