const { Client } = require("pg");

const connectionData = {
  user: "postgres",
  host: "",
  database: "concesionario",
  password: "root1234",
  port: 5432,
};
const client = new Client(connectionData);
client.connect();
module.exports = client;
