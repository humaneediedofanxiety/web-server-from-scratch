// async js [async programming, event-loop, non blocking I/O]
const randomNumGen = () => {
  let number = Math.round(Math.random() * 100 + 1);
  return number;
};

console.log(randomNumGen());

// callbacks and event listeners
function getResult() {
  let result = randomNumGen();
  return console.log(result);
}

setTimeout(getResult, 3000);
// console.log("this will run before that");

// A promise is an object returned by an async function, keywords : new Promise, async/await.

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
  // console.log(response);
  const jsonFormat = response.json();
  jsonFormat.then((date) => {
    console.log(date[9].name);
  });
});

console.log("Started request…");
