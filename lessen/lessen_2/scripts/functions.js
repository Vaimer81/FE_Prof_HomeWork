// Написать функцию, которая принимает в качестве аргумента число и возвращает это число, умноженное на 10
function add(num){
    return num*10
}
console.log(add(5));
// 1. Написать функцию, которая принимает в качестве аргумента 2 числа, и возвращает их сумму
 /*function getSum(num1, num2){
    return num1 + num2
  }*/
  
  const getSum_arrow = (num1, num2) => num1 + num2;
  
   console.log(getSum_arrow(4, 6)); // 10
  // console.log(getSum_arrow(43, 7)); // 50
  for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  // Проверяем, является ли текущее число простым
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  // Если число простое, выводим его в консоль
  if (isPrime) {
    console.log(i);
  }
}