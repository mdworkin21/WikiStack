const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/wikistack');
const router = require('../routes/wiki')
const bodyParse = require('body-parser')

router.use(bodyParse())

function transformSlug(title){
 return title.replace(/\s+/g, '_').replace(/\W/g, '');
 }

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false

  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
})


Page.beforeCreate((userInstance, optionsObject) =>{
  userInstance.slug = hash(userInstance.transformSlug(page))
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }

})


module.exports = {
  db, Page, User
}
