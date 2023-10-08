document.addEventListener('DOMContentLoaded', () => {
    // JavaScript for adding items to the cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartList = document.querySelector('.cart-list');
    const totalPriceElement = document.querySelector('.total-price');
    let cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            // Check if the item is already in the cart
            const existingItem = cartItems.find(item => item.name === productName);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push({
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = '';

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartList.appendChild(listItem);
        });

        const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
});
