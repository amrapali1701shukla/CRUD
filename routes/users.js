var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jx4',{useNewUrlParser: true},{useUnifiedTopology:true})

var userSchema = mongoose.Schema({
  name:String,
  username:String
})

module.exports = mongoose.model("user",userSchema);