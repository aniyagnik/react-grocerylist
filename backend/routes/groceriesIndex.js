const router = require('express').Router();

const Groceries = require('../models/grocery.model');


function checkInputs(body){
  if(/[a-z]+$/i.test(body.quantity) || /\d/.test(body.groceryName)){  
    this.setState({
      groceryName:"",
      quantity:""
    })
    alert('invalid input...');
    return false;
  }

  return true;
}

router.post('/ViewGroceryList',(req, res) => {
  console.log("in /view grocery post")
  Groceries.find()
    .then(s=>res.json(s))
    .catch(err => {
      console.log("error ",err)
      res.status(400).json('Error: ' + err)});
});

router.post('/add', (req, res) => {
  console.log('in post add ',req.body)
  if(!checkInputs(req.body)){
    res.sendStatus(404).json('invalid input...')
  }
  const {groceryName} = req.body
  const {quantity} = req.body
  
  if(!groceryName || !quantity){
    res.json('enter values first.')
  } 
  const newGDetail = new Groceries({
    groceryName,
    quantity
  });
  console.log("asd ", newGDetail)
  newGDetail.save()
  .then(() => res.json('Groceries added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/ViewGroceryList/delete',(req, res) => {
  console.log("in del sel ",req.body)
  const arr=req.body.deleteGrocery.map(ele=>{
    return Groceries.findByIdAndDelete(ele)
      .then((res) =>{console.log('Groceries deleted.',res)})
      .catch(err => res.status(400).json('Error: ' + err))
  })
    Promise.all([arr])
    .then(a=>{
      return res.status(200).json('succesfully deleted ')
    })
     .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/ViewGroceryList/update/', (req, res) => {
  console.log("in grocery post update")
  if(!checkInputs(req.body)){
    res.sendStatus(404).json('invalid input...')
  }
  Groceries.findById(req.body.id)
    .then(gDetail => {
      gDetail._id = gDetail.id
      gDetail.groceryName = req.body.groceryName;
      gDetail.quantity = req.body.quantity;

      gDetail.save()
        .then(() => res.json('Groceries updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;