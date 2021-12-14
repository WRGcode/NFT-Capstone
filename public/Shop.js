const url = '/api/v1/NFT'
const fileFromDOM = document.querySelector('.file-form')

const nameInput = document.querySelector('#name')
const PriceInput = document.querySelector('#price')
const imageInput = document.querySelector('#image')
const fileForm = document.querySelector(".file-form")

const container = document.querySelector('.container')
let imageValue;


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
            <button>+🛒</button>
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

//🛒