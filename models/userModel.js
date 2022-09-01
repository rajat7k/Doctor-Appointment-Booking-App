const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isdoctor:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    seenNotifications:{
        type:Array,
        defalut:[],
    },
    unseenNotifications:{
        type:Array,
        defalut:[],
    },
},
    {
        timestamps: true,
    }
);
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;