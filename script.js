document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    const cartCount = document.getElementById("cart-count");

    // Add to cart functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const productId = this.getAttribute("data-product-id");
            addToCart(productId);
        });
    });

    // Function to add item to cart
    function addToCart(productId) {
        cart.push(productId);
        updateCartCount();
    }

    // Function to remove item from cart
    function removeFromCart(productId) {
        const index = cart.indexOf(productId);
        if (index > -1) {
            cart.splice(index, 1);
            updateCartCount();
        }
    }

    // Update cart count in the navbar
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Login/Sign-Up functionality
    const loginLink = document.getElementById("login-link");
    loginLink.addEventListener("click", function() {
        // Display login or sign-up form
        displayLoginForm();
    });

    function displayLoginForm() {
        const loginForm = `
            <div id="login-form">
                <h2>Login</h2>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="#" id="signup-link">Sign up</a></p>
            </div>
        `;
        document.body.insertAdjacentHTML("beforeend", loginForm);

        document.getElementById("signup-link").addEventListener("click", function() {
            displaySignUpForm();
        });
    }

    function displaySignUpForm() {
        const signUpForm = `
            <div id="signup-form">
                <h2>Sign Up</h2>
                <form>
                    <label for="new-username">Username:</label>
                    <input type="text" id="new-username" name="new-username" required>
                    <label for="new-password">Password:</label>
                    <input type="password" id="new-password" name="new-password" required>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="#" id="login-link-again">Login</a></p>
            </div>
        `;
        document.getElementById("login-form").remove();
        document.body.insertAdjacentHTML("beforeend", signUpForm);

        document.getElementById("login-link-again").addEventListener("click", function() {
            displayLoginForm();
        });
    }
});
