const products = [
    {
        name:"kid's gown",
        url:'images/kiddies.jpg',
        category:'kids',
        price:'$3000',
    },
    {
        name:'Lingery',
        url:'images/linger2.jpg',
        category:'lingeries',
        price:'$2500',
    },
    {
        name:'Brown Sandal',
        url:'images/sandal1.jpg',
        category:'sandals',
        price:'$1000',
    },
    {
        name:'Shirt',
        url:'images/shirt2.jpg',
        category:'shirts',
        price:'$2000',
    },
    {
        name:'Trouser',
        url:'images/trouser2.jpg',
        category:'trousers',
        price:'$2800',
    },
    {
        name:'Flat shoes',
        url:'images/flat shoes 3.jpg',
        category:'flat shoes',
        price:'$1800',
    },
   
    {
        name:"kid's gown",
        url:'images/kiddies.jpg',
        category:'kids',
        price:'$3000',
    },
    {
        name:'Flat Sandal',
        url:'images/sandal2.jpg',
        category:'sandals',
        price:'$1000',
    },
    {
        name:'Lingery',
        url:'images/linger2.jpg',
        category:'lingeries',
        price:'$2500',
    },
    {
        name:'Shirt',
        url:'images/shirt2.jpg',
        category:'shirts',
        price:'$2000',
    },
    {
        name:'Luxurious bag',
        url:'images/bag3.jpg',
        category:'bag',
        price:'$1800',
    },
    {
        name:'Trouser',
        url:'images/trouser2.jpg',
        category:'trousers',
        price:'$2800',
    },
    {
        name:'Rope Sandal',
        url:'images/sandal3.jpg',
        category:'sandals',
        price:'$1100',
    },
    {
        name:'Lingery',
        url:'images/linger2.jpg',
        category:'lingeries',
        price:'$2500',
    },
    {
        name:"kid's gown",
        url:'images/kiddies.jpg',
        category:'kids',
        price:'$3000',
    },
    {
        name:'White Heels',
        url:'images/white heels.jpg',
        category:'heels',
        price:'$1800',
    },
    {
        name:'classy bag',
        url:'images/bag2.jpg',
        category:'bag',
        price:'$1800',
    },
    {
        name:'Shirt',
        url:'images/shirt2.jpg',
        category:'shirts',
        price:'$2000',
    },
    {
        name:'Leather Flat shoes',
        url:'images/flat shoes 2.jpg',
        category:'flat shoes',
        price:'$1800',
    },
    {
        name:'Trouser',
        url:'images/trouser2.jpg',
        category:'trousers',
        price:'$2800',
    },
    {
        name:'Black Heels',
        url:'images/heels2.jpg',
        category:'heels',
        price:'$1800',
    },
    {
        name:'Italian Flat shoes',
        url:'images/flat shoes1.jpg',
        category:'flat shoes',
        price:'$1800',
    },
    
    {
        name:'White bag',
        url:'images/bag1.jpg',
        category:'bag',
        price:'$1800',
    },
    {
        name:'Gold Heels',
        url:'images/heels1.jpg',
        category:'heels',
        price:'$1800',
    },
   
];
const categories = [
    {
        label:'kids',
        url:'images/BALL.jpg',
        Instock: 7,
    },
    {
        label:'Lingeries',
        url:'images/lingerie.jpg',
        Instock: 5,
    },
    {
        label:'Shirts',
        url:'images/shirt3.jpg',
        Instock: 3,
    },
    {
        label:'Trousers',
        url:'images/trouser3.jpg',
        Instock: 5,
    },
    {
        label:'Heels',
        url:'images/heels.jpg',
        Instock: 4,
    },
    {
        label:'Sandals',
        url:'images/sandal4.jpg',
        Instock: 3,
    },
    {
        label:'Bag',
        url:'images/bag.jpg',
        Instock: 5,
    },
    {
        label:'Flat shoes',
        url:'images/Flat.jpg',
        Instock: 4,
    }
]


// select DOM element
const productsWrapper = document.getElementById('product-wrapper');
const checkBoxes = document.querySelectorAll('.check');
const filterContainer = document.getElementById('filter-container');
const searchInput = document.getElementById('search');
const cartCount= document.getElementById('cart-count');

// Init cart Item count

let cartItemCount = 0;

// init product element array
const productElements = [];

// event listener for filter
// filterContainer.addEventListener('change', filterProducts);
// searchInput.addEventListener('input', filterProducts);





const ListContainer = document.querySelector("#filter-container")
const boxes = document.querySelectorAll(".cat-box")


  
 
// create function element for list
let currentCategory ="all"

const createCategoryElement=(category) =>{
    const categoryElement = document.createElement('div');


    categoryElement.className = 'check swiper-slide cat-box text-black  flex flex-col items-center w-[40%] md:w-[30%] lg:w-[20%] md:hover:bg-gray-200 py-6';


    categoryElement.innerHTML = `
    
    <div class="filt-img">
    <img src=${category.url}
     class="cat-image">
</div>
<div class="label">
 <!-- <input type="checkbox" class="check" id="kid"/> -->
 <label for="kid">${category.label}</label>
 <p>${category.Instock} PRODUCTS</p>
</div>

    `;


    categoryElement.addEventListener("click", ()=>{

        currentCategory= category.label
       
        filterProducts()

    })



    return categoryElement;

}


let categoryElements =[]
categories.map((category, index)=>{

    const categoryElement = createCategoryElement(category);
    ListContainer.appendChild(categoryElement)
    

}) 





let filteredPro = products

const setProducts =(filteredPro)=>{
    productsWrapper.innerHTML=''
    // searchInput.innerHTML=''
    
    filteredPro.forEach((product) => {
        const productElement = createProductElement(product);
        productElements.push(productElement);
        productsWrapper.appendChild(productElement);
    });
}

setProducts(filteredPro)


// create function element
function createProductElement(product) {
    const productElement = document.createElement('div');


    productElement.className = 'item space-y-2 md:w-[35%] lg:w-[20%]';


    productElement.innerHTML = `
    
    <div 
        class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
                    <img 
                    src="${product.url}" 
                    alt="${product.name}" 
                    class="w-full h-full object-cover">
                    <button
                     class="status bg-black text-white absolute bottom-0 
                     left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
                     >
                        Add to Cart
                    </button>
                </div>
                <p class="text-xl">${product.name}</p>
                <strong>${product.price}</strong>   

    `;


    productElement.querySelector('.status').addEventListener('click', updateCart);



    return productElement;

}

// Add or remove item from cart
function updateCart(e) {
    const statusl = e.target;
    if (statusl.classList.contains('added')) {
        // remove from cart
        statusl.classList.remove('added');
        statusl.innerText = 'Add to Cart';
        statusl.classList.remove('bg-red-600');
        statusl.classList.add('bg-gray-800');

        cartItemCount--;
    } else {
        // add to cart
        statusl.classList.add('added');
        statusl.innerText = 'Remove from Cart';
        statusl.classList.remove('bg-gray-800');
        statusl.classList.add('bg-red-600');

        cartItemCount++;
    }

    // update cart
    cartCount.innerText = cartItemCount;
}


function filterProducts() {
    

if(currentCategory == "all"){
    filteredPro = products

}else{
    
    filteredPro = products.filter((product)=> product.category.toLocaleLowerCase() == currentCategory.toLowerCase())
}


setProducts(filteredPro)






} 


 searchInput.addEventListener("input", searchPro)

function searchPro(){
    
    filteredPro = products.filter((product)=>  product.name.toLocaleLowerCase().includes(searchInput.value) || product.category.toLocaleLowerCase().includes(searchInput.value)  )

    setProducts(filteredPro)

}






