const express = require('express')
const router = express()

const { updateCart, AddToCart, RemoveFromCart, RemoveAllCart, GetCart } = require("../Controllers/cart")

const BuyItems = require('../Controllers/purchase')

module.exports = router;