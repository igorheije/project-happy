//importar dependendia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//iniciando o express
const server = express();
server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))

  // configurar template engines
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //criar rotas
  .get("/", pages.index)
  .get("/orfanato", pages.orfanato)
  .get("/orfanatos", pages.orfanatos)
  .get("/create-orfanat", pages.createOrfanat)
  .post("/save-orfanato", pages.saveOrfanato);

// ligar o servidor
server.listen(5500);
