const exppress = require("express");
const router = exppress.Router();
const controllerRutas = require("../controller/controladorRutas");

router
  .get("/manufacters", controllerRutas.getManufactersController)
  .get("/products", controllerRutas.getProductsController)
  .get("/eliminarDato", controllerRutas.seEliminarDatoController)
  .get("/infoCoche", controllerRutas.getInfoCochesController)
  .get("/colores", controllerRutas.getColoresController)
  .get("/precioMax", controllerRutas.getPrecioMaximoController);

module.exports = router;
