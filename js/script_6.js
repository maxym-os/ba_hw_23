// Написать конвертор валют. Пользователь вводит количество USD, выбирает,
// в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let usd = prompt('Скільки USD?');
let currency = prompt('Перевести в EUR, UAH чи AZN?');

const usdEur = 0.91;
const usdUah = 24.5;
const usdAzn = 1.7;

if (currency == 'EUR') {
  alert(usd * usdEur);
}
if (currency == 'UAH') {
  alert(usd * usdUah);
}
if (currency == 'AZN') {
  alert(usd * usdAzn);
}