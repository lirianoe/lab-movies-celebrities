const { find } = require('../models/Celebrity.model');
const Celebrity = require('../models/Celebrity.model')

const router = require("express").Router();

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});

router.post("/celebrities/create", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })

    .then(() => {
      res.redirect("/celebrities");
    })

    .catch((err) => {
      res.render("/celebrities/new-celebrity.hbs");
    });
});

router.get('/celebrities', (req, res, next)=> {
  Celebrity.find()
  .then(function(celebrities){
      res.render('celebrities/celebrities.hbs', {celebrities: celebrities})
  })
  .catch(err => console.log(err))
})


res.render("celebrities/celebrities.hbs");
module.exports = router;
