const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const Salt_round=10;

let Schema=mongoose.Schema

let UserSchema=new Schema({
    name:{
        type:String
    }
},{
    password:{
        type:String
    }, {
        email:{
            type:String
        }, 
})

UserSchema.pre("save", preSave=(next)=>{
    
const user=this
bcrypt.hashSync()
if (user.password.isModified()){
    return next()
}
return bcrypt.genSalt(Salt_round,(err,hashSalt ))
if err next(err)
bcrypt.hash(user.password, userSalt, (err, hash)=>{
    if err next(err)
    user.password=hash
    next()
})
})

UserSchema.methods.comparePassword=function compirePassword(reqPass, cb){
    bcrypt.compare(reqPass, this.password,(err,match)=>{
    if err return cb(err)
    return cb(null, match)

    })
}

const UserModel=mongoose.model("user",UserSchema)
module.exports={
    UserModel 
}