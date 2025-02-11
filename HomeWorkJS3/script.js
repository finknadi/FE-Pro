let product = {
    title: "Велосипед", 
    img: "https://i.pinimg.com/550x/98/88/53/9888537e197cf298871d3cafb31cfd5a.jpg", 
    count: 10,
    favorite: false
}

const btnPlus = document.querySelector(".plus")
const btnMinus = document.querySelector(".minus")
const counterElem = document.querySelector("span")
let counterValue = 10

// Получаем данные из localStorage при загрузке страницы
if(localStorage.getItem("count") !== null) {
    counterValue = +localStorage.getItem("count")
}
counterElem.innerText = counterValue

btnPlus.addEventListener("click", function () {
    product.count++
    counterValue++
    counterElem.innerText = counterValue
    localStorage.setItem("count", counterValue); // Сохраняем значение в localStorage
})

btnMinus.addEventListener("click", function () {
    if (product.count > 0) {
        product.count--
        counterValue--
        counterElem.innerText = counterValue
        localStorage.setItem("count", counterValue); // Сохраняем значение в localStorage
    }
})

let btnStar = document.querySelector(".star")
btnStar.addEventListener("click", function () {
    product.favorite = !product.favorite // Переключаем состояние избранного
    if (product.favorite) {
        btnStar.classList.add("active"); // Добавляем активный стиль
    } else {
        btnStar.classList.remove("active"); // Убираем активный стиль
    }
    localStorage.setItem("product", JSON.stringify(product)); // Сохраняем данные о товаре в localStorage
})
