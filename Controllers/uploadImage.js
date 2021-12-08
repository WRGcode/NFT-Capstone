const path = require('path')
const cloudinary = require('cloudinary').v2
const fs = require('fs')

const uploadNFTImage = async (req, res) => {
    const response = await cloudinary.uploader.upload(req.files.image.tempFilePath,
        {
            use_filename: true,
            folder: "file-upload"
        })

        const maxSize = 1024 * 1024;
    if (response.size > maxSize) {
        console.log('image to big')
    }

    fs.unlinkSync(req.files.image.tempFilePath);
    return res.status(200).json({ image: { src: response.secure_url } })
}

module.exports = uploadNFTImage
