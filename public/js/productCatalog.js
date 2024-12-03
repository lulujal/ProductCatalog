 async function fetchProducts() {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            return data.products;
        }

        function renderProducts(products) {
            const productsContainer = document.getElementById('products-container');
            productsContainer.innerHTML = '';

            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product';

                productElement.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.thumbnail}')">Add to Cart</button>
                `;

                productsContainer.appendChild(productElement);
            });
        }

        function addToCart(id, title, price, thumbnail) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const product = { id, title, price, thumbnail };
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Product added to cart!');
        }

        document.addEventListener('DOMContentLoaded', async () => {
            const products = await fetchProducts();
            renderProducts(products);
        });