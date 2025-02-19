// async js [async programming, event-loop, non blocking I/O]
const randomNumGen = () => {
  let number = Math.round(Math.random() * 100 + 1);
  return number;
};

console.log(randomNumGen());
