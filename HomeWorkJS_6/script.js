// 1. Легкая Задача
// Напишите функцию introduce, которая выводит в консоль строку:
// "Привет, меня зовут [имя]!"
// Функция должна использовать this.firstname.
// Затем создайте два объекта с полем firstname
// Используя метод call, вызовите функцию introduce для каждого объекта, чтобы в консоли отобразились правильные приветствия.

function introduce() {
  console.log(`Привет, меня зовут ${this.firstname}!`);
}

let person1 = { firstname: "Алексей" };
let person2 = { firstname: "Марина" };

introduce.call(person1);
introduce.call(person2);

// 2. Легкая Задача
// Создайте функцию sumThreeNumbers, которая принимает три числа и возвращает их сумму. Затем создайте массив из трёх чисел, например [2, 4, 6]. Используйте метод apply, чтобы передать элементы массива в функцию как аргументы и вычислить сумму с помощью apply.

function sumThreeNumbers(a, b, c) {
  return a + b + c;
}

let numbers = [2, 4, 6];

let sum = sumThreeNumbers.apply(null, numbers);

console.log(sum);

//   3. Сложная Задача
// Реализуйте функцию calculateFinalPrice(extraDiscount, basePrice, tax, productTitle),
// extraDiscount — дополнительная скидка в процентах;
// basePrice — базовая цена продукта;
// tax — налог на продукт;
// productTitle — название продукта.
// Функция вычисляет окончательную цену продукта по формуле:
// finalPrice = (basePrice + tax) * (1 - (this.discountRate + extraDiscount) / 100);
// discountRate — персональная скидка клиента в процентах;
// fullname — полное имя клиента.
// Функция должна выводить в консоль сообщение:
// Окончательная цена продукта ${productTitle} для пользователя ${this.fullname}: ${finalPrice}.

function calculateFinalPrice(extraDiscount, basePrice, tax, productTitle) {
  const finalPrice =
    (basePrice + tax) * (1 - (this.discountRate + extraDiscount) / 100);
  console.log(
    `Окончательная цена продукта ${productTitle} для пользователя ${this.fullname}: ${finalPrice}.`
  );
}

let client = {
  fullname: "Иван Иванов",
  discountRate: 15,
};

calculateFinalPrice.apply(client, [10, 1000, 150, "Ноутбук"]);

// Задача. Создайте два объекта клиентов.
// Объект customerA со свойствами:
// discountRate: 5 (5% персональной скидки);
// fullname: "Alice".
// Объект customerB со свойствами:
// discountRate: 10 (10% персональной скидки);
// fullname: "Bob".

// Создайте две привязанные функции с помощью метода bind.
// Функцию customerACalculateFinalPrice, которая привязана к объекту customerA и имеет предустановленную дополнительную скидку extraDiscount = 5.
// Функцию customerBCalculateFinalPrice, которая привязана к объекту customerB и имеет предустановленную дополнительную скидку extraDiscount = 10.

// Примените эти функции к массиву products, содержащему объекты:
// [
//   { title: "Телефон", basePrice: 1000, tax: 100 },
//   { title: "Ноутбук", basePrice: 2000, tax: 200 },
//   { title: "Планшет", basePrice: 500, tax: 50 }
// ]
// Для каждого продукта должны быть вызваны обе функции (для customerA и customerB), выводя результаты в консоль.
// Окончательная цена продукта Телефон для пользователя Alice: 990
// Окончательная цена продукта Телефон для пользователя Bob: 880
// … (аналогично для других продуктов)

function calculateFinalPrice(extraDiscount, basePrice, tax, productTitle) {
  const finalPrice =
    (basePrice + tax) * (1 - (this.discountRate + extraDiscount) / 100);
  console.log(
    `Окончательная цена продукта ${productTitle} для пользователя ${this.fullname}: ${finalPrice}`
  );
}

let customerA = {
  discountRate: 5,
  fullname: "Alice",
};

let customerB = {
  discountRate: 10,
  fullname: "Bob",
};

let products = [
  { title: "Телефон", basePrice: 1000, tax: 100 },
  { title: "Ноутбук", basePrice: 2000, tax: 200 },
  { title: "Планшет", basePrice: 500, tax: 50 },
];

let customerACalculateFinalPrice = calculateFinalPrice.bind(customerA, 5);
let customerBCalculateFinalPrice = calculateFinalPrice.bind(customerB, 10);

products.forEach((product) => {
  customerACalculateFinalPrice(product.basePrice, product.tax, product.title);
  customerBCalculateFinalPrice(product.basePrice, product.tax, product.title);
});
