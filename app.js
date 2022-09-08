const express = require("express");
const app = express();
const config = require("./modules/config.js");
const routerPostgre = require("./routes/postgre");
const cors = require("cors");
app.use(cors());
console.log(config);

app.use("/", (req, resp, next) => {
  console.log("La app de Postgres se ha iniciado");
  next();
});
app.use("/postgre", routerPostgre);

app.listen(config.PORT, config.HOST, () => {
  console.log(
    "Servidor conectado en host:" + config.HOST + " y puerto: " + config.PORT
  );
});
