require('dotenv').config();

const mongoose = require('mongoose');

try {
    mongoose.connect("mongodb://localhost:27017/paytm");
    
} catch (error) {
    console.log(error)
    console.log("MongoDB Connection Error")
}


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength:30
    },
    password: {
        type: String,
        required:true,
        minLength:6
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxLength:50
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        maxLength:50
    }

});


const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",  // Here only if a user record is present in userSchema then only he can add balance 
        required: true
    },
    balance:{
        type: Number,
        required: true
    },
});

//mongoose.Schema.Types.ObjectId, we're telling Mongoose to expect ObjectId values in that field. 
//This allows us to establish relationships between documents in different collections by referencing their ObjectId values.


const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);
module.exports ={
    User,
    Account
};
