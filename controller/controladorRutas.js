const servicios = require("../services/serviceConcesionario");

const getManufactersController = (req, resp) => {
  servicios.getManufacters(resp);
};
const getProductsController = (req, resp) => {
  const marca = req.query.marca;
  const color = req.query.color;
  const precio = req.query.precio;
  const palabraClave = req.query.palabraClave;
  servicios.getProducts(resp, marca, color, precio, palabraClave.toUpperCase());
};

const seEliminarDatoController = (req, resp) => {
  let id = req.query.idCoche;
  servicios.setEliminarCoche(resp, id);
};

const getInfoCochesController = (req, resp) => {
  let id = req.query.idCoche;
  servicios.getInfoCoches(resp, id);
};

const getColoresController = (req, resp) => {
  servicios.getColores(resp);
};

const getPrecioMaximoController = (req, resp) => {
  servicios.getMaxPrecio(resp);
};

module.exports = {
  getManufactersController,
  getProductsController,
  seEliminarDatoController,
  getInfoCochesController,
  getColoresController,
  getPrecioMaximoController,
};
