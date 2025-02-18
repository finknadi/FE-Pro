
const bodyElem = document.querySelector("body");


const mainElem = document.createElement("main");
bodyElem.append(mainElem);

const formDiv = document.createElement("div");
formDiv.classList.add("forma");
mainElem.append(formDiv);

const formInput = document.createElement("form");
formInput.classList.add("fInput");
formDiv.append(formInput);

const inputField = document.createElement("input");
inputField.setAttribute("type", "number");
inputField.setAttribute("placeholder", "Введите ID продукта");
inputField.setAttribute("min", "1");
formInput.append(inputField);

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.innerText = "Показать";
formInput.append(submitButton);


const productContainer = document.createElement("div");
mainElem.append(productContainer);


function createElement(tag, className, text = "") {
    const elem = document.createElement(tag);
    if (className) elem.classList.add(className);
    if (text) elem.innerText = text;
    return elem;
}

async function getProductByID(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Продукт не найден");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}


formInput.addEventListener("submit", async function (event) {
    event.preventDefault();
    const productId = inputField.value.trim();

    if (!productId) {
        alert("Введите ID продукта!");
        return;
    }

   
    productContainer.innerHTML = "";

    const product = await getProductByID(productId);
    if (!product) {
        productContainer.innerText = "Продукт не найден!";
        return;
    }


    const persCardDiv = createElement("div", "person_card");
    productContainer.append(persCardDiv);

    const imageDiv = createElement("div", "image");
    persCardDiv.append(imageDiv);

    const fotoElem = createElement("img");
    fotoElem.setAttribute("alt", product.title);
    fotoElem.setAttribute("src", product.images[0] || "placeholder.jpg");
    imageDiv.append(fotoElem);

    const title = createElement("h3", "title", product.title);
    persCardDiv.append(title);

    const textDiv = createElement("div", "text");
    persCardDiv.append(textDiv);

    textDiv.append(createElement("p", "stock", `Stock: ${product.stock}`));
    textDiv.append(createElement("p", "price", `Price: $${product.price}`));


    let ratingValue = 0;
    if (product.reviews && product.reviews.length > 0) {
        ratingValue = product.reviews.reduce((acc, el) => acc + el.rating, 0) / product.reviews.length;
    }
    textDiv.append(createElement("p", "rating", `Rating AVG: ${ratingValue.toFixed(1)}`));

    textDiv.append(createElement("p", "category", `Category: ${product.category}`));
});