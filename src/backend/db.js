import mongoose from "mongoose";


const db = async () => {
    if(mongoose.connection.readyState >= 1){
        return
    }
    try {
        await mongoose.connect("mongodb+srv://root:root@cluster0.mjjgsmt.mongodb.net/world")
        console.log("database connected successfully")
    } catch (error) {
        console.error(error)
    }
}

export default db