import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDb = async ( ) => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MONGODB Connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch(error) {
        console.log("MONGODB Connection error ", error);
        process.exit(1);
    }
}

export default connectDb;