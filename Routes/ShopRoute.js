const express = require('express')
const router = express()

const { CreateNFT, GetAllShop, DeleteNFT } = require("../Controllers/NFTs")

const uploadNFTImage = require('../Controllers/uploadImage')

module.exports = router;