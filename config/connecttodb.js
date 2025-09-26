import mongoose from "mongoose";;
const connecttodb = async() =>{
    try{
mongoose.connect('mongodb://127.0.0.1:27017/campus-connect');

    } catch(error){
        console.log(error.message);
    }
};

export default connecttodb;