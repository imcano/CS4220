

const adder = (previous, next) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(previous + next);
      }, 10);
    });
}

async function iterateNumbers(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    try {
      total = await adder(total, numbers[i]);
    } catch(err) {
        console.log(err);
    }
  }

  console.log(`Total: \n ${total}`);
}

iterateNumbers([1, 2, 3, 5, 8, 13, 21])
    // Total:
    // 53

const checkPriority = ({ name, priority }, callback) => {
  setTimeout(() => {
    const error = !priority ? name: null;
    callback(error, { name: priority });
  }, 90);
}

const makePriorityList = (todos) => {
  const complete = [];
  const missing = [];

  todos.forEach((todo) => {
    checkPriority(todo, (error, result) => {
      if (error) {
          missing.push(error);
      } else {
          complete.push(result);
      }
    });
  });

  console.log(complete);
  console.log(missing);
}

const todos = [{
  name: 'get coffee',
  priority: 90
},
{
  name: 'clean room',
  priority: null
},
{
  name: 'go to CS4220',
  priority: 40
},
{
  name: 'do homework before due date',
  priority: 80
}]
makePriorityList(todos)

// Priority
//   [ { name: 'get coffee', priority: 90 },
//   { name: 'do homework before due date', priority: 80 },
//   { name: 'go to CS4220', priority: 40 } ]
// Missing Priority [ 'clean room' ]