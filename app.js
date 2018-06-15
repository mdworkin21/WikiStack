const express = require('express');
const morgan = require('morgan')
const bodyParse = require('body-parser')
const htmlTemplate = require("html-template-tag")
const main = require('./views/main')
const app = express();
const {db} = require('./models')


app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"))



app.get('/', (req, res, next) =>{
  res.send(main())
})



const PORT = 3000;

const init = async () => {
  try{
  await db.User.sync();
  await db.Page.sync();

  } catch(err){
    console.log(err)
  }

app.listen(PORT, () =>{
  console.log('APP is listening on: ', PORT)
})

}

init();

db.authenticate().
then(() => {
  console.log('connected to the database');
})
