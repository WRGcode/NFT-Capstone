const NFTSchema = require('../models/NFTSchema')
const CartSchema = require('../models/CartSchema')


const CreateNFT = async (req, res) => {
    const NFT = await NFTSchema.create(req.body)
    res.status(200).json({ NFT })
}

const GetAllShop = async (req, res) => {
    const NFT = await NFTSchema.find({})
    res.status(200).json({ NFT })
}

const DeleteNFT = async (req, res) => {
    try {
    const { id } = req.params;
    const NFT = await NFTSchema.deleteOne({ _id: id})
    if (!NFT) {
        return res.json({ msg: `no item with id : ${id}` });
      }res.json({ method: req.method, NFT: NFT, id: req.params.id });
    } catch (err) {
        res.json({ msg: `err` });
      }
    res.status(200).json({ NFT })
}



module.exports = {
    CreateNFT,
    GetAllShop,
    DeleteNFT
}