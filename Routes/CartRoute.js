const express = require('express')
const router = express()

const { updateCart, AddToCart, RemoveFromCart, RemoveAllCart, GetCart } = require("../Controllers/cart")

const BuyItems = require('../Controllers/purchase')

router.route("/").put(updateCart).put(AddToCart)

router.route("cart").get(GetCart).delete(RemoveFromCart).delete(RemoveAllCart)
router.route("cart:id").delete(RemoveFromCart)

router.route("purchase").put(BuyItems)


module.exports = router;