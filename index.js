const input = document.querySelector(".input");
const products = document.querySelectorAll(".product");
const categories = document.querySelectorAll(".org") ;

input.addEventListener("keyup",(e) => {
    e.preventDefault();

    const search = e.target.value.trim();

    products.forEach(product => {
        if(product.textContent.includes(search)) {
            product.style.display = "block"
        } else {
            product.style.display = "none"
            
        }
    });
})