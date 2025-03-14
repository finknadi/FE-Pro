// 1. Создайте класс Car с свойствами mark (марка), model (модель) и year (год выпуска). Добавьте метод age(), который вычисляет возраст автомобиля (на основе текущего года).

// 2.  Модифицируйте класс Person, добавив новое свойство email и метод change_email(newEmail), который меняет email только если новый email содержит символ "@" и ".", иначе выбрасывает исключение.

// 3. Создайте класс Library, который хранит статический массив книг. Каждая книга – это объект с свойствами title и author. Добавьте статический метод addBook(book), который добавляет книгу в библиотеку, и статический метод listBooks(), который выводит список книг в консоль.

// 4. Создайте класс Rectangle с приватными свойствами #width и #height. Реализуйте геттеры и сеттеры для этих свойств, чтобы ширина и высота могли устанавливаться только положительными числами. Добавьте метод area(), который возвращает площадь прямоугольника.

// 5. Создайте класс BankAccount с приватным свойством #balance. Реализуйте методы для депозита и снятия средств. Добавьте геттер для получения текущего баланса. При попытке снять сумму, большую чем баланс, выбрасывайте исключение. Затем создайте статический метод, который ведёт учёт всех созданных счетов (например, массив accounts) и статический метод для расчёта общего баланса всех счетов.

// 1. Класс Car
class Car {
  constructor(mark, model, year) {
    this.mark = mark;
    this.model = model;
    this.year = year;
  }

  age() {
    return new Date().getFullYear() - this.year;
  }
}

let car1 = new Car("Audi", "RS7", 2020);
console.log(car1);
console.log("Возраст авто:", car1.age());

// 2. Класс Person
class Person {
  constructor(username, age, email) {
    this.name = username;
    this.age = age;
    this.email = email;
  }

  changeEmail(newEmail) {
    if (newEmail.includes("@") && newEmail.includes(".")) {
      this.email = newEmail;
      return this.email;
    }
    throw new Error("Недопустимый email");
  }
}

let user = new Person("Michael", 35, "michael@gmail.com");
console.log(user);
console.log(user.changeEmail("newmichael@gmail.com"));

// 3. Класс Library (с новыми книгами)
class Library {
  static books = [
    { title: "Мозг и счастье", author: "Дин Бернетт" },
    { title: "Пластичность мозга", author: "Норман Дойдж" },
    { title: "Трансерфинг реальности", author: "Вадим Зеланд" },
  ];

  static addBook(book) {
    if (
      !Library.books.some(
        (b) => b.title === book.title && b.author === book.author
      )
    ) {
      Library.books.push(book);
      console.log(`Книга "${book.title}" добавлена в библиотеку.`);
    } else {
      console.log(`Книга "${book.title}" уже есть в библиотеке.`);
    }
  }

  static listBooks() {
    if (Library.books.length === 0) {
      console.log("Библиотека пуста.");
    } else {
      console.log("Список книг в библиотеке:");
      Library.books.forEach((book) =>
        console.log(`"${book.title}" — автор: ${book.author}`)
      );
    }
  }
}

Library.addBook({ title: "Как работает мозг", author: "Джон Медина" });
Library.addBook({ title: "Тайна Шамбалы", author: "Джеймс Редфилд" });
Library.listBooks();

// 4. Класс Rectangle
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this.#width;
  }

  set width(value) {
    if (value > 0) {
      this.#width = value;
    } else {
      throw new Error("Ширина должна быть положительным числом");
    }
  }

  get height() {
    return this.#height;
  }

  set height(value) {
    if (value > 0) {
      this.#height = value;
    } else {
      throw new Error("Высота должна быть положительным числом");
    }
  }

  area() {
    return this.#width * this.#height;
  }
}

let figure1 = new Rectangle(15, 6);
console.log(figure1.width);
console.log(figure1.height);
console.log("Площадь:", figure1.area());

// 5. Класс BankAccount
class BankAccount {
  #balance;
  static accounts = [];

  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("Начальный баланс не может быть отрицательным");
    }
    this.#balance = initialBalance;
    BankAccount.accounts.push(this);
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Сумма депозита должна быть положительной.");
    }
    this.#balance += amount;
  }

  getMoney(amount) {
    if (amount <= 0) {
      throw new Error("Сумма снятия должна быть положительной.");
    }
    if (amount > this.#balance) {
      throw new Error("Недостаточно средств на счете.");
    }
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }

  static getTotalBalance() {
    return BankAccount.accounts.reduce(
      (acc, account) => acc + account.balance,
      0
    );
  }
}

let account1 = new BankAccount(1500);
let account2 = new BankAccount(700);
let account3 = new BankAccount(350);

console.log(account1.balance);
account1.deposit(750);
console.log("Текущий баланс после депозита:", account1.balance);
account1.getMoney(1200);
console.log("Текущий баланс после снятия:", account1.balance);
console.log("Общий баланс всех счетов:", BankAccount.getTotalBalance());

// Проверка ошибки снятия
try {
  account1.getMoney(2000);
} catch (error) {
  console.log("Ошибка:", error.message);
}
