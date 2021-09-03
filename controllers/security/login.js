const express = require("express");
const authentication = require("../../models/security/authentication")
const jwt = require("../../models/security/authorization")

const router = express.Router();


router.route("/")
  .all(function(req, res, next){
    console.log("login middleware")
    next()
  })
  .get(function(req, res){
    res.send("Necessário autenticação para utilizar os serviços do Mod12 DB")
  })
  .post(function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    if( !username || !password){
      res.send("Confira username e password e tente novamente")
    }


    authentication.checkPassword(username, password)
    .then(resolve => {
      if (resolve){
        res.send(`Bem vindo ${username}`)
      } else {
        res.send("Confira username e password e tente novamente")
      }
    })
    .catch(err => res.send(err))

    
    // GERAR JWT E DEVOLVER PARA USUÁRIO
    //ARMAZENAR ID DE USUÁRIO

  })



 const simpleCRUD = require("../../models/business/simpleCRUD")
router.route("/testes")
  .post(async function (req, res){
    const a = await simpleCRUD.getRowById(1, "users", "id, username, password_hash")
    console.log(a)
    res.send(a)
  })

module.exports = router