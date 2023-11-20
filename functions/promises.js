// Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2);
    } else {
      callback(TypeError('Number must be provided'));
    }
  }, 2000);
};

// Callback hell example
getDataCallback(2, (error, myData) => {
  if (error) {
    console.log(error);
  } else {
    getDataCallback(myData, (err, data) => (err ? console.log(err) : console.log(data)));
  }
});

// Benefits of using promises
// 1) Clearer what's going on with explicit resolve reject
// 2) No weird behaviour because it can only resolve or reject
// 3) Also since either can only execute some action one time
// 4) More options for when data comes in (promise 'fulfills')

const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        typeof num === 'number' ? resolve(num * 2) : reject(TypeError('Number must be provided')),
      2000
    );
  });

getDataPromise(2).then(
  (myData) =>
    getDataPromise(myData).then(
      (data) => console.log(`Promise data: ${data}`),
      (err) => console.log(err)
    ),
  (err) => console.log(err)
);

getDataPromise(10) // Promise chaining
  .then((data) => getDataPromise(data))
  .then((data) => 'Some test data')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
