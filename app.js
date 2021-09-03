const customExpress = require("./config/configExpress");
const db = require("./config/configPostgreSQL")


const port = 3001;

db.connect(err => {
  if (err) {
      console.log(err)
  } else {

      db.query("SELECT * from NOW()", (err, res) => {
        if (err) { 
          console.log(err) 
        } else{
          console.log("Banco de dados conectado em " + res.rows[0].now)
        }
      })

      const app = customExpress()

      app.listen(port, () => console.log('Servidor rodando na porta ' + port))
  }
})

