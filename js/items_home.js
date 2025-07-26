fetch('products.json')
    .then(res => res.json())
    .then(data => {
        // Populate the swiper items with products from the JSON data
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const swiper_items_sale = document.getElementById('swiper_items_sale');
        const swiper_electronics = document.getElementById('swiper_electronics');
        const swiper_appliances = document.getElementById('swiper_appliances');
        const swiper_mobiles = document.getElementById('swiper_mobiles');

        data.forEach(product => {
        if (product.old_price) {
            const isInCart = cart.some(cartItem => cartItem.id === product.id);
            const percent_disc = Math.round((product.old_price - product.price) / product.old_price * 100)
            swiper_items_sale.innerHTML += `
                <div class="swiper-slide product">
                            <span class="sale_present">%${percent_disc}</span>
                            <div class="img_product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name_product"><a href="#">${product.name}</a></p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                <p class="old_price">$${product.old_price}</p>
                            </div>
                            <div class="icons">
                                <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                                </span>
                                <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                            </div>
                        </div>
        `;
        }
        });

        data.forEach(product => {
        if (product.catetory == "electronics") {
            const isInCart = cart.some(cartItem => cartItem.id === product.id);
            const old_price_paragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";
            const percent_disc = Math.round((product.old_price - product.price) / product.old_price * 100)
            const percent_disc_dev = product.old_price ? `<span class="sale_present">%${percent_disc}</span>` : "";
            swiper_electronics.innerHTML += `
                <div class="swiper-slide product">
                            ${percent_disc_dev}
                            <div class="img_product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name_product"><a href="#">${product.name}</a></p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                ${old_price_paragraph}
                            </div>
                            <div class="icons">
                                <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                                </span>
                                <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                            </div>
                        </div>
        `;
        }
        });

        data.forEach(product => {
        if (product.catetory == "appliances") {
            const isInCart = cart.some(cartItem => cartItem.id === product.id);
            const old_price_paragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";
            const percent_disc = Math.round((product.old_price - product.price) / product.old_price * 100)
            const percent_disc_dev = product.old_price ? `<span class="sale_present">%${percent_disc}</span>` : "";
            swiper_appliances.innerHTML += `
                <div class="swiper-slide product">
                            ${percent_disc_dev}
                            <div class="img_product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name_product"><a href="#">${product.name}</a></p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                ${old_price_paragraph}
                            </div>
                            <div class="icons">
                                <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                                </span>
                                <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                            </div>
                        </div>
        `;
        }
        });

        data.forEach(product => {
        if (product.catetory == "mobiles") {
            const isInCart = cart.some(cartItem => cartItem.id === product.id);
            const old_price_paragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";
            const percent_disc = Math.round((product.old_price - product.price) / product.old_price * 100)
            const percent_disc_dev = product.old_price ? `<span class="sale_present">%${percent_disc}</span>` : "";
            swiper_mobiles.innerHTML += `
                <div class="swiper-slide product">
                            ${percent_disc_dev}
                            <div class="img_product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name_product"><a href="#">${product.name}</a></p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                ${old_price_paragraph}
                            </div>
                            <div class="icons">
                                <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                                </span>
                                <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                            </div>
                        </div>
        `;
        }
        });

            // swiper slide product

let swiper2 = new Swiper(".slide_product", {
        slidesPerView: 5,
        spaceBetween: 20,
        
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        700: {
            slidesPerView: 3,            
            spaceBetween: 15,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    }});
})


