const router = require('express').Router()
const addPages = require('../views/addPage')
const bodyParse = require('body-parser')



//
const { Page } = require("../models");
const { addPage } = require("../views");

router.use(bodyParse())

function transformSlug(title){
 return title.replace(/\s+/g, '_').replace(/\W/g, '');
 }

console.log({Page})
Page.beforeCreate((page) =>{
  page.slug = page.transformSlug(req.body.title)
})


router.post('/', async (req, res, next) => {

  const page = new Page({
    title: req.body.title,
    content: req.body.content,


  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});



router.get('/', (req, res, next) => {
  res.send('test')
})


router.get('/add', (req, res) => {
  res.send(addPages())
})

module.exports = router

