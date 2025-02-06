
// Дан массив их строк. Программа должна подсчитать количество слов, которые содержат больше 5 символов.
let strarr = ["мышь", "кот", "собака", "лошадь"]
let words = 0
for (let i = 0; i < strarr.length; i++) { 
    if (strarr[i].length > 5) {
        words++  
    }
}
console.log(words);


// Создайте массив чисел от 1 до 20. Выведите все четные числа из этого массива.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);        
    }   
}


// Напишите программу, которая принимает строку из букв и цифр (например, "a1b2c3d4"), и создает два массива отдельно с числами и отдельно с буквами из этой строки: [1, 2, 3, 4] [a, b , c, d]
let numstrings = "a1b2c3d4"
let nums1 = []
let strings1 = []
for (let i = 0; i < numstrings.length; i++) {
    if (!isNaN(numstrings[i])) {
        nums1.push(parseInt(numstrings[i]))
    } else {
        strings1.push(numstrings[i])
    }
}
console.log(nums1);
console.log(strings1);


// Дан массив чисел, например [10, 15, 3, 7, 20, 8, 25]. Найдите два числа, сумма которых равна 25, и выведите их. Если таких чисел нет, выведите сообщение об этом.
let numarr = [10, 15, 3, 7, 20, 8, 25]
let sum1 = 25
for (let i = 0; i < numarr.length; i++) {
    for (let j = i + 1; j < numarr.length; j++) {
        if (numarr[i] + numarr[j] === sum1) {
            console.log(numarr[i], numarr[j]);
            break;
        }
    }
}


// Дан массив строк, например ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"]. Объедините их в одну строку, добавив между ними символ -, но только между строками, где колиечство букв совпадает.
let strings = ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"];

let result = strings
    .map((str, i, arr) => (i > 0 && str.length === arr[i - 1].length ? `-${str}` : str))
    .join("");

console.log(result);


// Сгенерируйте массив из 10 случайных чисел от 1 до 100. Найдите максимальное и минимальное число в массиве, а также их разницу.
const numbers = Array.from({ length: 10 }, function() {
    return Math.floor(Math.random() * 100) + 1;
});

console.log("Массив:", numbers);

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);
const difference = max - min;

console.log("Максимальное число:", max);
console.log("Минимальное число:", min);
console.log("Разница между max и min:", difference);


//Напишите программу, которая принимает строку из чисел, разделенных запятыми (например, "1,2,3,4,5") и выводит сумму всех чисел.
let str = "1, 2, 3, 4, 5";

let sum = str
    .split(",") 
    .map(function(num) {
        return parseFloat(num.trim()); 
    })
    .reduce(function(acc, curr) {
        return acc + curr; 
    }, 0);

console.log(sum);