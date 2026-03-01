async function getMessage(): Promise<string> {
  const message: string = await new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Hello from TS');
    }, 1000);
  });
  return message;
}

console.warn('Task 7: Async Function with Promise');
getMessage().then(result => console.log(result));

// Завдання:

// Додай до функції явну типізацію, яка вказує, що вона повертає проміс.
// Переконайся, що значення, з яким виконається проміс, – це рядок (string).
