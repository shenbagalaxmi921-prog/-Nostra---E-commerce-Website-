var search = document.getElementById("search")

search.addEventListener("keyup", function () {

    var enteredValue = search.value.toUpperCase()

    var products = document.querySelectorAll(".product")

    products.forEach(function (product) {

        var productName = product.querySelector("h3").textContent

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            product.style.display = "none"
        }
        else {
            product.style.display = "block"
        }

    })

})

function filterProducts(category) {

    var products = document.querySelectorAll(".product")

    products.forEach(function (product) {

        if (category == "all") {
            product.style.display = "block"
        }

        else if (product.classList.contains(category)) {
            product.style.display = "block"
        }

        else {
            product.style.display = "none"
        }

    })

}
function toggleMenu() {

    var navLinks = document.getElementById("nav-links")

    navLinks.classList.toggle("show")

}