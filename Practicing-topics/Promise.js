const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random()*10;
    if (randomNumber > 3) {
      resolve(randomNumber); // Resolve with a value
    } else {
      reject(new Error("Random number is too small")); // Reject with an error
    }
  }, 1000);
});

// Consuming the promise
myPromise.then(
  (result) => {
    console.log("Promise fulfilled with result:", result);
  },
  (error) => {
    console.error("Promise rejected with error:", error);
  }
);
