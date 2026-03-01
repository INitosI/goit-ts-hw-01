console.warn('Task 6: Generic Function');

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber: number = getFirstElement<number>([1, 2, 3]);
const firstString: string = getFirstElement<string>(['a', 'b', 'c']);
const firstBoolean: boolean = getFirstElement<boolean>([true, false, true]);

console.log(firstNumber);
console.log(firstString);
console.log(firstBoolean);

// Завдання:

// Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
// Додай явну типізацію дженериків у виклики функцій.
// Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
// Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.
