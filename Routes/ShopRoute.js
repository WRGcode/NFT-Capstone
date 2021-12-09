const express = require('express')
const router = express()

const { CreateNFT, GetAllShop, DeleteNFT } = require("../Controllers/NFTs")

const uploadNFTImage = require('../Controllers/uploadImage')

router.route("/").post(CreateNFT).get(GetAllShop)
router.route("/:id").delete(DeleteNFT)

router.route("upload").post(uploadNFTImage)

module.exports = router;