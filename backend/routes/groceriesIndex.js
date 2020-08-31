const router = require('express').Router();

const Groceries = require('../models/grocery.model');

router.get('/',(req, res) => {
  Groceries.find()
    .then(gDetail => res.json(gDetail))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  console.log('in post add ',req.body)
  const {groceryName} = req.body
  const {quantity} = req.body

  const newGDetail = new Groceries({
    groceryName,
    quantity
  });
  console.log("asd ", newGDetail)
  newGDetail.save()
  .then(() => res.json('Groceries added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/:id',(req, res) => {
  Groceries.findByIdAndDelete(req.params.id)
    .then(() => res.json('Groceries deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/update/:id', (req, res) => {
  Groceries.findById(req.params.id)
    .then(gDetail => {
      gDetail.grocertName = req.body.grocertName;
      gDetail.quantity = req.body.quantity;

      gDetail.save()
        .then(() => res.json('Groceries updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;