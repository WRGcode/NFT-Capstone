require("dotenv").config()
require("express-async-errors");

const express = require("express");
const app = express();
const fileUpload = require('express-fileupload')

const NFTs = require('./Controllers/NFTs')
const cart = require('./Controllers/cart')
const purchase = require('./Controllers/purchase')
const uploadImage = require('./Controllers/uploadImage')

const connectDB = require("./DB/connect");

const ShopRoute = require('./Routes/ShopRoute')
const CartRoute = require('./Routes/CartRoute')

const cloudinary = require('cloudinary').v2
cloudinary.config({ 
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  });

const notFoundMiddlewere = require("./Middleware/Not-found")
const errorMiddlewere = require("./Middleware/Error-handler");

const port = process.env.PORT || 3000
app.use(express.json())
app.use(fileUpload({useTempFiles: true}))

app.use(express.static('./Public'))

app.use ("/api/v1/NFT", ShopRoute)
app.use ("/api/v1/cart", CartRoute)


// .use(errorMiddlewere
.use(notFoundMiddlewere)

const start = async() => {
try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log("listening @ " + port))
} catch (error){
    console.log(error);
}
}

start()
