// Callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    callback('This is a callback error', 'This is the data');
  }, 2000);
};

getDataCallback((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Benefits of using promises
// 1) Clearer what's going on with explicit resolve reject
// 2) No weird behaviour because it can only resolve or reject
// 3) Also since either can only execute some action one time
// 4) More options for when data comes in (promise 'fulfills')

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is the promise data');
    reject(new Error('This is a promise error'));
  }, 2000);
});

myPromise.then(
  (data) => console.log(data),
  (err) => console.log(err)
);
