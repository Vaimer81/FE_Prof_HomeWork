const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10];

// Сформировать новый массив из чисел, заканчивющихся на 5 => [5, 15, 35, -5]

const numbers_five = [];

for(let i = 0; i < numbers.length; i++) {
  if(Math.abs(numbers[i] % 10) === 5){
    numbers_five.push(numbers[i])
  }
}

console.log(numbers_five);


// 2. Сформировать новый массив, состоящий из последних цифр чисел (без -) => [1, 5, 7, 8, 9, 4, 5, 5, 5, 0]

const last_digits = [];
for(let i = 0; i < numbers.length; i++){
  last_digits.push(Math.abs(numbers[i] % 10))
}
// 3. Написать функцию, которая принимает 3 числа и возвращает наибольшее из них

const getMaxNum = (num1, num2, num3) => Math.max(num1, num2, num3);

const getMaxNum1 = (num1, num2, num3) => {
  return Math.max(num1, num2, num3)
};

console.log(getMaxNum(4, 1, 88)); // 88
console.log(getMaxNum(65, 103, 3)); // 103
// 4. Написать функцию, которая принимает два числа - основание степени и степень и возвращает результат возведения числа в степень
function power(base, exponent) {
  return Math.pow(base, exponent);
}
const result = power(2, 5); // 2 возводится в 5-ую степень, результат равен 32
console.log(result); // 32
// 5. Сгенерировать случайное целое число от 0 до 10. Вывести его в консоль.

const random = Math.round(Math.random() * 10);
const random_2 = Math.floor(Math.random() * 11);


// 9. Написать функцию, которая принимает массив со строками. И формирует новый массив со строками, чья длина превышает 5 символов

const greetings = ['hello', 'hi', 'good morning', 'good afternoon', 'hey']; // ['good morning', 'good afternoon']

const getLongWords = arr => {
  const result = [];
  for(let i = 0; i < arr.length; i ++){
    if(arr[i].length > 5){
      result.push(arr[i])
    }
  }
  return result
}

console.log(getLongWords(greetings));
