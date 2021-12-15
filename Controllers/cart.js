const NFTSchema = require('../models/NFTSchema')
const CartSchema = require('../models/CartSchema')

// const updateCart = async (req, res) => {

// }

const AddToCart = async (req, res) => {
    const { id } = req.params
    const NFT = await NFTSchema.findById(id)
    NFT = await CartSchema.create(req.body)
    res.status(200).json({ NFT })
}

const RemoveFromCart = async (req, res) => {
    try {
        const { id } = req.params;
        const NFT = await CartSchema.deleteOne({ _id: id})
        if (!NFT) {
            return res.json({ msg: `no item with id : ${id}` });
          }res.json({ method: req.method, NFT: NFT, id: req.params.id });
        } catch (err) {
            res.json({ msg: `err` });
          }
        res.status(200).json({ NFT })
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