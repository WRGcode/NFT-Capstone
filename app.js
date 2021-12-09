require("dotenv").config()
require("express-async-errors");

const express = require("express");
const app = express();

const NFTs = require('./Controllers/NFTs')
const cart = require('./Controllers/cart')
const purchase = require('./Controllers/purchase')
const uploadImage = require('./Controllers/uploadImage')

const connectDB = require("./DB/connect");

const ShopRoute = require('./Routes/ShopRoute')
const CartRoute = require('./Routes/CartRoute')

const notFoundMiddlewere = require("./Middleware/Not-found")
const errorMiddlewere = require("./Middleware/Error-handler");

const port = process.env.PORT || 3000
app.use(express.json())
// app.use(fileUpload({useTempFiles: true}))

app.use(express.static('./Public'))

app.get('/', (req, res)=> {
    res.send("<h1>File upload starter</h1>")
})

// app.post("/stripe", stripeController)

.use(errorMiddlewere)
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
