// 1. Напишите цикл, который считает сумму чисел от 20 до 35
/*let sum =0;
for(let i =20; i<= 35; i++){
    sum += i
}*/
//console.log(sum);
// 2. Напишите цикл, который выводит произведение всех чисел от 10 до 15
/*let mult = 1;
for(let i =10; i<=15; i++){
    mult *=1;
}*/
// 3. Дан массив чисел. Сформировать новый массив, в который войдут только положительные числа

/*const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5];
const positive_numbers = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        positive_numbers.push(numbers[i])
    }

}
console.log(positive_numbers);*/

// 4. Сформировать новый массив из четных чисел
/*const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5];
const even_numbers = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      even_numbers.push(numbers[i])
    }
  }*/
  // 5. Сформировать новый массив из четных отрицательных чисел => [-88]
 /* const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5];
  const even_negative_numbers = [];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 === 0 && numbers[i] < 0){
    even_negative_numbers.push(numbers[i])
  }
}
// 6. Сформировать новый массив из чисел, заканчивющихся на 5 => [5, 15, 35, -5]
const arr = [5, 2, 15, 35, 42, -5];
const resultArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 10 === 5 || arr[i] % 10 === -5){
    resultArr.push(arr[i]);
  }
}*/
//console.log(resultArr);
// 7. Сформировать новый массив, состоящий их последних цифр чисел => [1, 5, -7, -8, 9, 4, 5, 5, -5, 0]
const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5];
const last_numbers = [];
for(let i = 0; i < numbers.length; i++) {
  last_numbers.push(numbers[i] % 10)
}

//console.log(last_numbers);

// 8. Сформировать новый массив, состоящий их последних цифр чисел (без -) => [1, 5, 7, 8, 9, 4, 5, 5, 5, 0]

const last_numbers2 = [];
for(let i = 0; i < numbers.length; i++) {
  last_numbers2.push(numbers[i] < 0 ? numbers[i] * -1 % 10 : numbers[i] % 10)
}
console.log(last_numbers2);