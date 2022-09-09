const client = require('../dataBase/conexion');

const getManufacters = (res) => {
  let query = 'SELECT * FROM public.manufacters';
  client
    .query(query)
    .then((response) => {
      res.json(response.rows);
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProducts = (res, marca, color, precio, palabraClave) => {
  let query = `SELECT * FROM public.products WHERE name LIKE '%${
    marca ?? ' '
  } %' AND color LIKE '%${
    color ?? ' '
  }%' AND price < ${precio} AND name LIKE '%${palabraClave ?? ' '}%'`;
  client
    .query(query)
    .then((response) => {
      res.json(response.rows);
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

const setEliminarCoche = (res, id) => {
  let query = `DELETE from public.products WHERE id=${id}`;

  client
    .query(query)
    .then(() => {
      res.json('Se ha eliminado el articulo');
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getInfoCoches = (res, id) => {
  let query = `SELECT id,price,color,cif,p.name,addres,M.name AS Mname FROM manufacters M ,products P WHERE P.id=${id} AND P.manufacter_cif = M.cif  `;

  client
    .query(query)
    .then((response) => {
      res.json(response.rows);
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getColores = (res) => {
  let query = 'SELECT DISTINCT color FROM public.products';

  client
    .query(query)
    .then((response) => {
      res.json(response.rows);
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMaxPrecio = (res) => {
  let query = 'SELECT MAX(price) FROM public.products';

  client
    .query(query)
    .then((response) => {
      res.json(response.rows);
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getColores,
  getInfoCoches,
  getManufacters,
  getMaxPrecio,
  getProducts,
  setEliminarCoche,
};
