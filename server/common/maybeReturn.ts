import getRandomInt from "./getRandomInt";
import wait from "./wait";

const maybeReturn = async <T>(callback: () => T): Promise<T> => {
  // Emulate response delay. The server responds in 300-1000ms.
  const delay = getRandomInt(300, 1000);
  await wait(delay);

  // Our server has only 95% reliability :(
  const shouldFail = getRandomInt(1, 100) <= 5;

  if (shouldFail) {
    throw new Error("API error");
  }

  return callback();
};

export default maybeReturn;
