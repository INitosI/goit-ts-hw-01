console.warn('Task 7: Async Function with Promise');

function getMessage(): Promise<string> {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Hello from TS');
    }, 1000);
  });
}

getMessage().then(result => console.log(result));

// Завдання:

// Додай до функції явну типізацію, яка вказує, що вона повертає проміс.
// Переконайся, що значення, з яким виконається проміс, – це рядок (string).
