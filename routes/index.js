var express = require('express');
var userModel = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/submit',function(req,res){
  userModel.create({
    name:req.body.name,
    username:req.body.username
  }).then(function(data){
    res.send(data);
  })
});

router.get('/find',function(req,res){
  userModel.find()
  .then(function(data){
    res.render('find',{data:data});
  })
});

router.get('/delete/:id',function(req,res){
  userModel.findOneAndDelete({_id:req.params.id})
  .then(function(data){
    res.redirect('/find');
  })
})

router.post('/edit/:id',function(req,res){
  userModel.findOneAndUpdate({_id:req.params.id},{name:req.body.newname},{new:true})
  .then(function(a){
    res.redirect('/find');
  })
  // userModel.findOne({_id:req.params.id})
  // .then(function(data){
  //   userModel.findOneAndUpdate({_id:data._id},{name:req.post.newname},{new:true})
  //  .then(function(savedata){
  //    res.send(savedata);
  //  })
  // })
})


module.exports = router;
