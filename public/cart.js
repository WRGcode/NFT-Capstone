const url2 = '/api/v1/cart'


const fileForm = document.querySelector(".file-form")

const container = document.querySelector('.container')
let imageValue;

const RemoveFromCart = async (id) =>{
    const RemoveNFT = await axios.delete(`${url2}/${id}`)
    console.log(RemoveNFT);
}


async function fetchProducts() {
    try {
        const {
            data: { NFT }
        } = await axios.get(url2)
        const tempProducts = NFT.map(each => {
            return `<article class="product">
            <img src="${each.image}" alt="${each.name}" class="img" />
            <footer>
            <p>${each.name}</p>
            <span>${each.price}</span>
            <button class="remove-btn" onclick="RemoveFromCart('${each._id}')">Remove</button>
            </footer>
            </article>`;
        })
            .join("")
        container.innerHTML = tempProducts
    } catch (error) {
        console.log(error);
    }
}

fetchProducts()
