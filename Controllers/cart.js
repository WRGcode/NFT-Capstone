const NFTSchema = require('../models/NFTSchema')
const CartSchema = require('../models/CartSchema')

// const updateCart = async (req, res) => {

// }

const AddToCart = async (req, res) => {
    const { id } = req.body
    const NFT = await NFTSchema.findById(id)
    const { name, price, image } = NFT
    const addedItem = await CartSchema.create({ name, price, image })
    res.status(200).json({ addedItem })
}

const RemoveFromCart = async (req, res) => {
    const { id } = req.params;
    const RemoveNFT = await CartSchema.findByIdAndDelete(id)
    res.status(200).json({ RemoveNFT })
}

const RemoveAllCart = async (req, res) => {
    const NFTs = await CartSchema.deleteMany({})
    res.json({ method: req.method, NFTs: NFTs });
    res.status(200).json({ NFTs })
}

const GetCart = async (req, res) => {
    const NFT = await CartSchema.find({})
    res.status(200).json({ NFT })
}

module.exports = {
    // updateCart,
    AddToCart,
    RemoveFromCart,
    RemoveAllCart,
    GetCart
}