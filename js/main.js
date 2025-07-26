let category_nav_list = document.querySelector(".category_nav_list")
function open_categ_list(){
    category_nav_list.classList.toggle("active")
}

// cart 
let cart = document.querySelector(".cart")
function cart_open_close(){
    cart.classList.toggle("active")
}


let nav_links = document.querySelector(".nav_links")
function open_menu(){
    nav_links.classList.toggle("active")
}



fetch("products.json")
.then(res => res.json())
.then(data => {
    const addToCartButton = document.querySelectorAll(".btn_add_cart")
    addToCartButton.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.getAttribute("data-id");
            const selectedProduct = data.find(product => product.id == productId);
            
                // Assuming you have a function to handle adding the product to the cart
                addToCart(selectedProduct);
                const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`);
                allMatchingButtons.forEach(btn => {
                    btn.classList.add("active");
                    btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item in Cart`;
                });
        });
    });
});


function addToCart(product) {
    // Example of updating localStorage (you can modify this as needed)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}


function updateCart() {

    const cartItemsContainer = document.getElementById("cart_items");
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const checkout_items = document.getElementById("checkout_items");

    if (checkout_items){
        checkout_items.innerHTML = ""; // Clear previous items
    }
    

    let totalPrice = 0;
    let totalCount = 0;

    
    cartItemsContainer.innerHTML = ""; // Clear previous items
    cart.forEach((item , index) => {
        let totalPriceItem = item.price * item.quantity;
        totalPrice += totalPriceItem;
        totalCount += item.quantity;
        // Create cart item HTML
        cartItemsContainer.innerHTML += `
            <div class="item_cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${totalPriceItem}</p>
                    <div class="quantity_control">
                        <button type="button" class="decrease_quantity" data-index="${index}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button type="button" class="increase_quantity" data-index="${index}">+</button>
                    </div>
                </div>
                <button type="button" class="delete_item" data-index="${index}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `

        if (checkout_items){
            checkout_items.innerHTML += `
            <div class="item_cart">
                            <div class="image_name">
                                <img src="${item.img}" alt="">
                                <div class="content">
                                    <h4>${item.name}</h4>
                                    <p class="price_cart">$${totalPriceItem}</p>
                                    <div class="quantity_control">
                                        <button class="decrease_quantity" data-index="${index}">-</button>
                                        <span class="quantity">${item.quantity}</span>
                                        <button class="increase_quantity" data-index="${index}">+</button>
                                    </div>
                                </div>
                            </div>

                            <button type="button" class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
            `
        }
    });

    const priceCartTotal = document.querySelector(".price_cart_total");
    const countItemCart = document.querySelector(".count_item_cart");
    const countItemHeader = document.querySelector(".count_item_header");
    
    priceCartTotal.innerHTML = `$${totalPrice}`;
    countItemCart.innerHTML = totalCount;
    countItemHeader.innerHTML = totalCount;

    if (checkout_items){
        const subtotal_checkout = document.querySelector(".subtotal_checkout");
        const total_checkout = document.querySelector(".total_checkout");
        subtotal_checkout.innerHTML = `$${totalPrice}`;
        total_checkout.innerHTML = `$${totalPrice + 15}`; // Adding shipping cost
    }


    // catch button increase quantity and decrease quantity
    const increaseButtons = document.querySelectorAll(".increase_quantity");
    const decreaseButtons = document.querySelectorAll(".decrease_quantity");
    
    increaseButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const itemIndex = event.target.closest("button").getAttribute("data-index");
            increaseQuantity(itemIndex);
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const itemIndex = event.target.closest("button").getAttribute("data-index");
            decreaseQuantity(itemIndex);
        });
    });

// delete cart
    const deleteButtons = document.querySelectorAll(".delete_item");
    deleteButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const itemIndex = event.target.closest("button").getAttribute("data-index");
            removeFromCart(itemIndex);
        });
    });
}

// increase quantity
function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// decrease quantity
function decreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
}
localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
}

    // update quantity
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const removeProduct = cart.splice(index, 1)[0];
    localStorage.setItem('cart', JSON.stringify(cart)) ;
    updateCart();
    updateButtons(removeProduct.id);
}

// update buttons
function updateButtons(productId) {
    const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`);
    allMatchingButtons.forEach(button => {
        button.classList.remove("active");
        button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> add to cart`;
    })
}

updateCart()