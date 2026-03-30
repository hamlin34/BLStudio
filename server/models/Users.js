// step 1: calling mongoose package
const {Schema,model} = require ("mongoose");
const mongoose = require ("mongoose");

// step 4 : define the variable for the UserSchema
const UserSchema = new Schema({
    name:{type:String},
    age:{type:Number},
    email:{type:String}
})

/*step 2: get the user database
- users from database 
- get this info using UserSchema
*/
const UserModel = mongoose.model("users", UserSchema);

//step 3 : use the model to export it
module.exports = UserModel;