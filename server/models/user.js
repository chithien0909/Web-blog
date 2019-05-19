const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var userSchema = new mongoose.Schema({
   email: {type: String, required: true, unique: true},
   password: {type: String, required: true},
   name: String,
   avatar: String,
   phone: String,
   address: String,
   dateJoin: Date
});
userSchema.pre('save',function (next) {
   if(this.isNew || this.isModified('password')){
      // Saving reference to this because of changing scopes
      const document = this;
      bcrypt.hash(document.password,saltRounds,saltRounds,
         function (err, hashedPassword) {
            if(err){
               next(err);
            }else{
               document.password = hashedPassword;
               next();
            }
         }
      );
   }else{
      next();
   }
});

module.exports = mongoose.model('Users',userSchema,'users');