# NFT-Capstone
a small e-commerce website to show mastery of Node and Express

# models
## NFTSchema and CartSchema

- name*
    - string
    
- price*
    - number

- image*
    -string (this is a url to the image storage)

# Controllers

## Uploading image

- UploadImage
    - takes a req.file and places that file on the cloudinary storage
    -- page 1

## NFTs

- CreateNFT
    -create a doc on the DB of a new NFT
    -- page 1

- GetAllShop
    - finds all products in NFT database
    -- page 2

- deleteNFT
    - delete a NFT from NFT database
    -- postman only

## Cart

- updateCart
    - will add or remove what in cart database
    -- page 3

- AddToCart
    - will add NFT database copy to cart database
    -- page 3

- RemoveFromCart
    - will remove NFT database copy form cart database
    -- page 3

 - RemoveAllCart
    - will remove All form cart database
    -- used by BuyItems or postman only

- GetCart
    - finds all products in cart array 
    -- page 3

## purchase

- BuyItems
    - after being send to a confirm page and confirming will remove all item from cart array and download items images(maybe), unhiding all items from Shop array and send email receipt 
    -- page 4

# routes

## ShopRoute
- all routes relating to the shop
    "/"
        - post -CreateNFT
        - get -GetAllNFT

    "upload"
        - post -UploadImage 
    
    "/:id"
        -delete -deleteNFT (removes item by id)

## CartRoute
-  all routes relating to the cart
    "cart/:id"
        - put - updateCart req.body with the direction ( increase / decrease )
        -delete -RemoveFromCart (removes item by id)

    "cart"
        - post -addToCart
        - delete -RemoveAllCart (removes all items)
        - get -GetCart

    "purchase"
        - put -BuyItems
        
        
