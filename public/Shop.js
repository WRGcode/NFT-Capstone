const url = '/api/v1/NFT'
const url2 = '/api/v1/cart'


const fileForm = document.querySelector(".file-form")

const container = document.querySelector('.container')
let imageValue;

const AddToCart = async (id) =>{
    axios.post()
}


async function fetchProducts() {
    try {
        const {
            data: { NFT }
        } = await axios.get(url)
        const tempProducts = NFT.map(each => {
            return `<article class="product">
            <img src="${each.image}" alt="${each.name}" class="img" />
            <footer>
            <p>${each.name}</p>
            <span>${each.price}</span>
            <button class="btn" onclick="AddToCart('${each._id}')">+🛒</button>
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
