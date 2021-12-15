const express = require('express')
const router = express()

const { updateCart, AddToCart, RemoveFromCart, RemoveAllCart, GetCart } = require("../Controllers/cart")

const BuyItems = require('../Controllers/purchase')

router.route("/").post(AddToCart).get(GetCart).delete(RemoveAllCart)
router.route("/:id").delete(RemoveFromCart)

router.route("/purchase").put(BuyItems)


module.exports = router;