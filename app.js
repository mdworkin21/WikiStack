const express = require('express');
const morgan = require('morgan')
const bodyParse = require('body-parser')
const htmlTemplate = require("html-template-tag")
const main = require('./views/main')
const app = express();
const {db} = require('./models')
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')

// const Page = require('./models')
// const User = require('./models')



app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"))
app.use('/wiki', wikiRouter)
app.use('/user', userRouter)



app.get('/', (req, res, next) =>{
  res.send(main())
})




const PORT = 3000;

const init = async () => {
  try{
  await db.sync({force: true})
  await db.User.sync();
  await db.Page.sync();

  } catch(err){
    console.log(err, 'test')
  }

app.listen(PORT, () =>{
  console.log('APP is listening on: ', PORT)
})

}

init();

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })
