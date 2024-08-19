// require('dotenv').config({path: './env'})

import dotenv from 'dotenv';
import connectDb from "./db/index.js";
import { app } from './app.js';

dotenv.config(
    {
        path: '/.env'
    }
)


connectDb()
.then( () => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is Running at Port : ${process.env.PORT}`);
    })
}
)
.catch((err) => {
    console.log('MongoDb Connection Failed !!!, ', err);
})


/*
const app = express();
// IIFE = Immediately Invoked Function Expression (Executed)
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: " + error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("Error: ", error);
        throw error
    }
})()
*/