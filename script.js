// Задача №1
// Оголоси функцію sayHi,
// всередині якої додай console.log()
//  з рядком "Hello, this is my first function!".
// Після оголошення виклич функцію sayHi.

//sayHi(); {

//console.log("Hello, this is my first function!");


//}
//sayHi();


// ..........
// Задача №2
// Функція add повинна вміти додавати три числа
//  і виводити результат у консоль.
// Додай функції add три параметри: a, b і c,
// які будуть отримувати значення аргументів під час її виклику.

// Доповни console.log() таким чином,
// щоб він логував рядок
// "Addition result equals <result>", де < result >
// - це сума переданих чисел.

//function add(a, b, c)
//{
//    const result = a + b + c
//   console.log('Addition result equals ${result}');

// }

//add(15, 27, 10);
//add(10, 20, 30);
//add(5, 10, 15);

// .........................
// Задача №3
// Доповни код функції add таким чином,
// щоб вона повертала результат додавання значень трьох
// параметрів: a, b і c.

//function add(a, b, c) {

//    return a + b + c;
 //}

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// ...............................
// Задача №4
// Функція makeMessage(name, price) складає і повертає повідомлення про покупку.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок
// "You picked <product name>, price per item is <product price> credits",
// де < product name > і < product price > - це значення параметрів name і price.
// Використовуй синтаксис шаблонних рядків.

// function makeMessage(name, price) {
//   const message ='You picked ${name}, price per item is ${price} credits' ;
//   return message;
// }

//const result1 = makeMassage("Radar", 6150);
//console.log(result1);

//const result2 = makeMassage("Reactor", 3500);
//console.log(result2);

//const result3 = makeMassage("Enginer", 8000);
//console.log(result3);

//const result4 = makeMassage("Scanner", 4070);
//console.log(result4);


// .............................
// Задача №5
// Функція calculateTotalPrice рахує і повертає загальну суму покупки.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином,
// щоб у змінну totalPrice записувалася загальна сума покупки -
// результат множення кількості товарів на ціну одного.

 //function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // const totalPrice = orderedQuantity * pricePerItem;
  // return totalPrice;
 //};

//const result1 = calculateTotalPrice(5, 100)
//console.log(result1);

///const result2 = calculateTotalPrice(8, 60)
//console.log(result2);

//const result3 = calculateTotalPrice(3, 400)
//console.log(result3);

//const result4 = calculateTotalPrice(1, 3500)
//console.log(result4);

//const result5 = calculateTotalPrice(12, 70)
//console.log(result5);

// ..........................
// Задача №6
// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// складає і повертає повідомлення про покупку ремонтних дроїдів.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.
//
// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення
// у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.".
// Не забудь про ціну доставки в обчисленнях загальної вартості.

 //function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
 //    const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
 //    return message =  `You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} is included in total price`;
 //}
//const result = makeOrderMessage(2, 100, 50)
//console.log("result", result);

//makeOrderMessage(4, 300, 100);
//makeOrderMessage(10, 70, 200);

// .......................
// Задача №7
// Функція isAdult оголошує один параметр age(вік),
// значення якого буде задаватися під час її виклику.
// Присвой змінній passed вираз перевірки віку користувача на повноліття.
// Людина вважається повнолітньою у віці 18 років і старше.

// function isAdult(age) {

//   const passed = age >=18;

//   return passed;
// }
//const result = isAdult(20);
//console.log(result)

 //isAdult(14);
 //isAdult(8);
 //isAdult(37);

// .....................
// Задача №8
// Функція isValidPassword(password) перевіряє рівність збереженого і введеного паролів
// і повертає результат перевірки - буль true або false.
// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля.
// Введений пароль передається у параметр password.
//
// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів.
// Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

// function isValidPassword(password) {
//  const SAVED_PASSWORD = 'jqueryismyjam';

//const isMatch = sValidPassword === password;

//   return isMatch;
// }
//const result = isValidPassword("mangodab3st");
//console.log(result)

//isValidPassword("kiwirul3z");
//isValidPassword("jqueryismyjam");
// .......................