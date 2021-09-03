const { text } = require('express');
const express = require('express');

const controllers = require("../controllers");


module.exports = () => {
  const app = express();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true}));
  
  app.use('/login', controllers.login)
  

                // function requireAuthentication (req, res, next) {

                //   console.log("requireAuthentication middleware")
                //   next()
                // }

                // app.use(requireAuthentication);
  

  return app;
}