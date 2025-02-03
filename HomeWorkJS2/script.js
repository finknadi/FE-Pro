
// 1. Дан массив чисел [12, 5, 8, 130, 44]. Создайте новый массив, содержащий только числа больше 10.

// 2. Напишите программу, которая принимает массив строк и возвращает массив длин этих строк по возрастанию.
// ["one", "three", "two"] -> [3, 5, 3] -> [3, 3, 5]

// 3. Есть массив строк. Отсортируйте строки по их длине (от самой короткой к самой длинной) и выведите результат.
// ['hello', 'world', 'javascript', 'code'] => ['code', 'hello', 'world', 'javascript']


// 4. Подсчитайте количество гласных букв в строке. Выведите результат.
// // let vowels = [a, e, i, o, u]
// "hello" -> 2
// "javascript" -> 3
// "world" -> 1

// 5. Дана строка. Отсортировать её символы в алфавитном порядке.
// "javascript"-> "aacijprstv"
// "hello" -> "ehllo"


// 6. Есть произвольная строка, определите, сколько раз каждый символ встречается в этой строке. Выведите результат в формате: "Символ X => Y".
// // "hello"
// Символ h => 1
// Символ e => 1
// Символ l => 2
// Символ o => 1

// 7. Дан массив чисел [3, 1, 4, 1, 5, 9]. Найдите сумму квадратов всех четных чисел.

// 8. Дан массив чисел. Проверить, упорядочены ли элементы по возрастанию.
// [1, 5, 9, 12, 36] => true
// [1, 5, 12, 9, 36, -5] => false

// 9. Дан массив слов. Создайте объект, где ключами будут первые буквы слов, а значениями — массивы слов, начинающихся на эти буквы. Например։
// ['apple', 'banana', 'apricot', 'blueberry', 'cherry'] -> 
// {
// a: ['apple', 'apricot'], 
// b: ['banana', 'blueberry'], 
// c: ['cherry']
// }

// 1. Дан массив чисел [12, 5, 8, 130, 44]. Создайте новый массив, содержащий только числа больше 10.

let numbers = [12, 5, 8, 130, 44]
let filteredNumbers = numbers.filter (function (value, index) {
    if (value > 10) {
        return value;
    }
}) 
console.log(filteredNumbers);

// 2. Напишите программу, которая принимает массив строк и возвращает массив длин этих строк по возрастанию.
// ["one", "three", "two"] -> [3, 5, 3] -> [3, 3, 5]

let string = ["one", "three", "two"];

let newlength = string
    .map(function (value) {
        return value.length;
    })
    .sort(function (a, b) {
        return a - b;
    });

console.log(newlength);

// 3. Есть массив строк. Отсортируйте строки по их длине (от самой короткой к самой длинной) и выведите результат.
// ['hello', 'world', 'javascript', 'code'] => ['code', 'hello', 'world', 'javascript']

let strings = ['hello', 'world', 'javascript', 'code']
let newStrings = strings.sort(function (a, b) {
    return a.length - b.length;
})
console.log(newStrings);

// 4. Подсчитайте количество гласных букв в строке. Выведите результат.
// // let vowels = [a, e, i, o, u]
// "hello" -> 2
// "javascript" -> 3
// "world" -> 1

let vowels = ['a', 'e', 'i', 'o', 'u']
function countVowels(str) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for (let char of str.toLowerCase()) {
if (vowels.includes(char)) {
    count++;
      }
    }   
    return count;
}
console.log(countVowels("hello"));      
console.log(countVowels("javascript"));  
console.log(countVowels("world"));  

// 5. Дана строка. Отсортировать её символы в алфавитном порядке.
// "javascript"-> "aacijprstv"
// "hello" -> "ehllo"

function sortString(str) {
    
    return str.split('').sort().join('');
}
console.log(sortString("javascript")); 
console.log(sortString("hello")); 


// 6. Есть произвольная строка, определите, сколько раз каждый символ встречается в этой строке. Выведите результат в формате: "Символ X => Y".
// // "hello"
// Символ h => 1
// Символ e => 1
// Символ l => 2
// Символ o => 1

let word = "hello";

function repeatChar(word) {
    let charCount = new Map();
    
    word.split("").forEach(function (char) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    });

    charCount.forEach(function (count, char) {
        console.log("Символ " + char + " => " + count);
    });
}

repeatChar(word);

// 7. Дан массив чисел [3, 1, 4, 1, 5, 9]. Найдите сумму квадратов всех четных чисел.

function sumEvenSquares(arr) {
    return arr
        .filter(function(num) {
            return num % 2 === 0; 
        })
        .map(function(num) {
            return num * num; 
        })
        .reduce(function(sum, num) {
            return sum + num; 
        }, 0);
}

let num = [3, 1, 4, 1, 5, 9];
let result = sumEvenSquares(num);
console.log(result); 

