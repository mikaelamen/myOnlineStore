// Get cart elements
let cartCountElement = document.getElementById('cart-count');
let cartTotalElement = document.getElementById('cart-total');
let cartItemsElement = document.getElementById('cart-items');

// Initialize cart
let cart = [];
let total = 0;

// Product data
let products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 }
];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        let productElement = this.closest('.product');
        let productId = productElement.getAttribute('data-id');
        let product = products.find(p => p.id == productId);

        // Add product to cart and update the total price
        addToCart(product);
    });
});

// Add product to the cart
function addToCart(product) {
    cart.push(product);
    total += product.price;

    // Update the cart display
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    cartCountElement.innerText = cart.length;
    cartTotalElement.innerText = total.toFixed(2);

    // Display cart items
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        let cartItemElement = document.createElement('div');
        cartItemElement.innerText = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(cartItemElement);
    });
}

// Checkout button functionality
document.getElementById('checkout-btn').addEventListener('click', function () {
    if (cart.length > 0) {
        alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
        cart = [];
        total = 0;
        updateCartDisplay();
    } else {
        alert('Your cart is empty!');
    }
});
