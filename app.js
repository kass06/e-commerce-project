let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    const totalSpan = document.getElementById('total');

    // Clear previous content
    cartList.innerHTML = '';

    // Calculate total price
    let total = 0;

    // Populate cart list
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `R{item.productName}: <span>R${item.price.toFixed(2)}</span>`;
        cartList.appendChild(listItem);

        // Update total
        total += item.price;
    });

    // Update total on the page
    totalSpan.textContent = `R${total.toFixed(2)}`;
}
