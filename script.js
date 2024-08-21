let TotalNumber_set = 81;
const buttons = [];
const number_set = new Set();
const number = [];
var CaratArray = [];


function checkSubGridNew(arr, row, col, num) {
  if (!arr) {
    console.error("Array is undefined");
    return false;
  }
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (startRow + i < arr.length && startCol + j < arr[0].length && arr[startRow + i][startCol + j] === num) {
        return true;
      }
    }
  }
  return false;
}
document.getElementById('level1').addEventListener("click", () => {
  console.log('LOG');
  

  let TotalNumber_set = 81;
  const buttons = [];
  const number_set = new Set();
  const number = [];
  var CaratArray = [];

  // Clear previous data
  localStorage.removeItem('number');

  const container = document.getElementById("number-container");
  container.innerHTML = '';

  const nameInput = document.getElementById('name');
  nameInput.value = '';
  alert("Enter your name to start a new game!");

  // Function to check subarid for duplicate values
  function checkSubGridNew(number, row, col, value) {
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
      if (!number[i]) continue; // Check if row exists
      for (let j = startCol; j < startCol + 3; j++) {
        if (number[i][j] === value) {
          return true;
        }
      }
    }
    return false;
  }

  // Function to validate input number
  function isValidNumber(value) {
    const num = parseInt(value);
    return !isNaN(num) && num >= 1 && num <= 9;
  }

  // Generate initial grid numbers
  for (let i = 0; i < 9; i++) {
    number[i] = [];
    for (let j = 0; j < 9; j++) {
      var randomValue;
      do {
        randomValue = Math.floor(Math.random() * 9) + 1;
      } while (
        number[i].includes(randomValue) ||
        number.some((row, rowIndex) => rowIndex !== i && row[j] === randomValue) ||
        checkSubGridNew(number, i, j, randomValue)
      );
      number[i][j] = randomValue;
      CaratArray.push(randomValue);
      console.log('CaratArray :', CaratArray);

      if (Math.random() < 0.95) {
        number[i][j] = " ";
      }
    }
  }

  function updateScore() {
    const emptyCells = number.flat().filter(cell => cell === " ").length;
    const newScore = (CaratArray.length - emptyCells) + 0;
    document.getElementById("score").innerHTML = newScore.toString();
  }

  // Generate HTML elements for the numbers
  for (let i = 0; i < number.length; i++) {
    var row = document.createElement("div");
    row.className = "number-row";
    for (let j = 0; j < number[i].length; j++) {
      var numDiv = document.createElement("div");
      numDiv.className = "number";
      numDiv.textContent = number[i][j];
      buttons.push(numDiv);

      numDiv.addEventListener('click', (function(i, j) {
        return function(event) {
          const target = event.target;
          const currentValue = target.textContent;
          
          if (currentValue == " ") {
            const newValue = prompt("Enter a new value (1-9):");

            if (!isValidNumber(newValue)) {
              alert("Invalid input. Please enter a number between 1 and 9.");
            } else if (
              number[i].includes(parseInt(newValue)) || 
              number.some((row, rowIndex) => rowIndex !== i && row[j] === parseInt(newValue)) || 
              checkSubGridNew(number, i, j, parseInt(newValue))
            ) {
              alert("This number does not match the grid rules.");
            } else {
              target.textContent = newValue;
              number[i][j] = parseInt(newValue); 
              let storedNumber = JSON.parse(localStorage.getItem('number')) || [];
              if (!storedNumber[i]) {
                storedNumber[i] = [];
              }
              storedNumber[i][j] = newValue;
              number_set.add(newValue);
              updateScore()
              localStorage.setItem('number', JSON.stringify(storedNumber));
            }
          }
        };
      })(i, j));
      row.appendChild(numDiv);                                                          
    }
    container.appendChild(row);
  }
 
});



// New checkSubGrid function
function checkSubGridNew(arr, row, col, num) {
  if (!arr) {
    console.error("Array is undefined");
    return false;
  }
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (startRow + i < arr.length && startCol + j < arr[0].length && arr[startRow + i][startCol + j] === num) {
        return true;
      }
    }
  }
  return false;
}



function isValidNumber(num) {
  return (num > 0 && num < 10) || num == " ";
}

document.getElementById('level2').addEventListener("click", (i, j) => {
  console.log(' :', "LOG 2");

  saveGameState();


  let TotalNumber_set = 81;
  const buttons = [];
  const number_set = new Set();
  const number = [];
  var CaratArray = [];

  //  name change
  localStorage.removeItem('number');

  const container = document.getElementById("number-container");
  container.innerHTML = '';

  const nameInput = document.getElementById('name');
  nameInput.value = '';
  alert("Enter your name to start a new game!");

  // New number generation
  for (let i = 0; i < 9; i++) {
    number[i] = [];
    for (let j = 0; j < 9; j++) {
      var randomValue;
      do {
        randomValue = Math.floor(Math.random() * 9) + 1;
      } while (
        number[i].includes(randomValue) ||
        number.some((row, rowIndex) => rowIndex !== i && row[j] === randomValue) ||
        checkSubGridNew(number, i, j, randomValue) // Changed function name
      );
      number[i][j] = randomValue;
      CaratArray.push(randomValue);
      console.log('CaratArray :', CaratArray);

      if (Math.random() < 0.85) {
        number[i][j] = " ";
      }
    }
  }

  function updateScore() {
    const emptyCells = number.flat().filter(cell => cell === " ").length;
    const newScore = (CaratArray.length - emptyCells) + 0;
    document.getElementById("score").innerHTML = newScore.toString();
  }

  // Generate HTML elements for the numbers
  for (let i = 0; i < number.length; i++) {
    var row = document.createElement("div");
    row.className = "number-row";
    for (let j = 0; j < number[i].length; j++) {
      var numDiv = document.createElement("div");
      numDiv.className = "number";
      numDiv.textContent = number[i][j];
      buttons.push(numDiv);

      numDiv.addEventListener('click', (function(i, j) {
        return function(event) {
          const target = event.target;
          const currentValue = target.textContent;
      
          if (currentValue == " ") {
            const newValue = prompt("Enter a new value (1-9):");
            CaratArray.push(newValue); // Move this line here
      
            if (!isValidNumber(newValue)) {
              alert("Invalid input. Please enter a number between 1 and 9.");
            } else if (
              number[i].includes(parseInt(newValue)) || 
              number.some((row, rowIndex) => rowIndex !== i && row[j] === parseInt(newValue)) || 
              checkSubGridNew(number, i, j, parseInt(newValue))
            ) {
              alert("this number is not match .");
            } else {
              target.textContent = newValue;
              number[i][j] = newValue; 
              let storedNumber = JSON.parse(localStorage.getItem('number')) || [];
              if (!storedNumber[i]) {
                storedNumber[i] = [];
              }
              storedNumber[i][j] = newValue;
              number_set.add(newValue);
              updateScore()
              localStorage.setItem('number', JSON.stringify(storedNumber));
            }
          }
        };
      })(i, j));
      row.appendChild(numDiv);
    }
    container.appendChild(row);
  }
});

function saveGameState() {
  const storedNumber = JSON.parse(localStorage.getItem('number')) || [];
  localStorage.setItem('number', JSON.stringify(storedNumber));
}

function loadGameState() {
  const storedNumber = JSON.parse(localStorage.getItem('number'));
  if (storedNumber) {
    number = storedNumber;
    CaratArray = number.flat();
    updateScore();
    generateHTML();
  }
}

window.onload = function() {
  loadGameState();
};


document.getElementById('level3').addEventListener("click", (i, j) => {
  console.log(' :', "LOG 3 ");
  let TotalNumber_set = 81;
  const buttons = [];
  const number_set = new Set();
  const number = [];
  var CaratArray = [];

  //  name change
  localStorage.removeItem('number');

  const container = document.getElementById("number-container");
  container.innerHTML = '';

  const nameInput = document.getElementById('name');
  nameInput.value = '';
  alert("Enter your name to start a new game!");

  // New number generation
  for (let i = 0; i < 9; i++) {
    number[i] = [];
    for (let j = 0; j < 9; j++) {
      var randomValue;
      do {
        randomValue = Math.floor(Math.random() * 9) + 1;
      } while (
        number[i].includes(randomValue) ||
        number.some((row, rowIndex) => rowIndex !== i && row[j] === randomValue) ||
        checkSubGridNew(number, i, j, randomValue) // Changed function name
      );
      number[i][j] = randomValue;
      CaratArray.push(randomValue);
      console.log('CaratArray :', CaratArray);

      if (Math.random() < 0.75) {
        number[i][j] = " ";
      }
    }
  }

  function updateScore() {
    const emptyCells = number.flat().filter(cell => cell === " ").length;
    const newScore = (CaratArray.length - emptyCells) + 0;
    document.getElementById("score").innerHTML = newScore.toString();
  }


  // Generate HTML elements for the numbers
  for (let i = 0; i < number.length; i++) {
    var row = document.createElement("div");
    row.className = "number-row";
    for (let j = 0; j < number[i].length; j++) {
      var numDiv = document.createElement("div");
      numDiv.className = "number";
      numDiv.textContent = number[i][j];
      buttons.push(numDiv);

      numDiv.addEventListener('click', (function(i, j) {
        return function(event) {
          const target = event.target;
          const currentValue = target.textContent;
      
          if (currentValue == " ") {
            const newValue = prompt("Enter a new value (1-9):");
            CaratArray.push(newValue); // Move this line here
      
            if (!isValidNumber(newValue)) {
              alert("Invalid input. Please enter a number between 1 and 9.");
            } else if (
              number[i].includes(parseInt(newValue)) || 
              number.some((row, rowIndex) => rowIndex !== i && row[j] === parseInt(newValue)) || 
              checkSubGridNew(number, i, j, parseInt(newValue))
            ) {
              alert("this number is not match .");
            } else {
              target.textContent = newValue;
              number[i][j] = newValue; 
              let storedNumber = JSON.parse(localStorage.getItem('number')) || [];
              if (!storedNumber[i]) {
                storedNumber[i] = [];
              }
              storedNumber[i][j] = newValue;
              number_set.add(newValue);
              updateScore()
              localStorage.setItem('number', JSON.stringify(storedNumber));
            }
          }
        };
      })(i, j));
      row.appendChild(numDiv);
    }
    container.appendChild(row);
  }
});

window.onload = function() {
  const nameInput = document.getElementById('name');
  nameInput.value = '';
  nameInput.focus();
  alert("Enter your name to start a new game!");
}


function checkSubGrid(arr, row, col, num) {
  if (!arr) {
    console.error("Array is undefined");
    return false;
  }
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (startRow + i < arr.length && startCol + j < arr[0].length && arr[startRow + i][startCol + j] === num) {
        return true;
      }
    }
  }
  return false;
}



function updateScore() {
  const emptyCells = number.flat().filter(cell => cell === " ").length;
  const newScore = (CaratArray.length - emptyCells) + 0;
  document.getElementById("score").innerHTML = newScore.toString();
  localStorage.setItem("newScore",newScore)
}

for (let i = 0; i < 9; i++) {
  number[i] = [];
  for (let j = 0; j < 9; j++) {
    var randomValue;
    do {
      randomValue = Math.floor(Math.random() * 9) + 1;
    } while (
      number[i].includes(randomValue) ||
       number.some((row, rowIndex) => rowIndex !== i && row[j] === randomValue) ||
       checkSubGrid(number, i, j, randomValue)
    );
    number[i][j] = randomValue;
    CaratArray.push(randomValue);
    console.log('CaratArray :', CaratArray);

    // 0.75    her a can not chang
    if (Math.random() < 0.75) {
      number[i][j] = " ";
    }
  
  }
}






function isValidNumber(num) {
  return (num > 0 && num < 10) || num == " ";
}

function validateNumbers(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (!isValidNumber(arr[i][j])) {
        console.log("false");
        return;
      }
    }
  }
  console.log("true");
  const container = document.getElementById("number-container");

  for (var i = 0; i < number.length; i++) {
    var row = document.createElement("div");
    row.className = "number-row";
    for (var j = 0; j < number[i].length; j++) {
      var numDiv = document.createElement("div");
      numDiv.className = "number";
      numDiv.textContent = number[i][j];
      buttons.push(numDiv);

      numDiv.addEventListener(
        "click",
        (function (i, j) {
          return function (event) {
            const target = event.target;
            const currentValue = target.textContent;
            if (currentValue == " ") {
              const newValue = prompt("Enter a new value (1-9):");
              if (!isValidNumber(newValue)) {
                alert("Invalid input. Please enter a number between 1 and 9.");
              } else if (
                number[i].includes(parseInt(newValue)) ||
                number.some(
                  (row, rowIndex) =>
                    rowIndex !== i && row[j] === parseInt(newValue)
                ) ||
                checkSubGrid(number, i, j, parseInt(newValue))
              ) {
                alert("this number is not match .");
              } else {
                target.textContent = newValue;
                number[i][j] = newValue;
                let storedNumber =
                  JSON.parse(localStorage.getItem("number")) || [];
                if (!storedNumber[i]) {
                  storedNumber[i] = [];
                }
                storedNumber[i][j] = newValue;
                number_set.add(newValue);
                updateScore();
                localStorage.setItem("number", JSON.stringify(storedNumber));
              }
            }
          };
        })(i, j)
      );
      row.appendChild(numDiv);
    }
    container.appendChild(row);
  }
}

validateNumbers(number);






///////////////?   time  /////////?/////////////////////////

let startTime;
let endTime;
let timerInterval;
let timeRanges = [];
let isRunning = false;

function setTime() {
  const nameInput = document.getElementById('name');
  const name = nameInput.value;
  startTime = new Date();
  console.log(`Start time set to ${startTime} user name is ${name}`);
  displayTimeRanges();
  startTimer();
  isRunning = true;
}

function displayTimeRanges() {
  const timeRangesDiv = document.querySelector('.timeRanges');
  const currentTime = new Date();
  const minutes = Math.floor((currentTime - startTime) / 1000 / 60);
  const seconds = Math.floor((currentTime - startTime) / 1000 % 60);
  timeRangesDiv.innerHTML = `Start time: ${formatTime(startTime)}<br>Current time: ${minutes} minutes ${seconds} seconds`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    displayTimeRanges();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  endTime = new Date();
  isRunning = false;
  addTimeRange();
}



function addTimeRange() {
  const nameInput = document.getElementById('name');
  const name = nameInput.value;
  const newTimeRange = {
    id: timeRanges.length + 1,
    startTime: formatTime(startTime),
    userName: name,
    endTime: formatTime(endTime),
    currentTime: formatTime(endTime)
  };
  timeRanges.push(newTimeRange);
  console.log(timeRanges);
  localStorage.setItem('timeRanges', JSON.stringify(timeRanges));
}

function formatTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

document.getElementById('set').addEventListener("click", setTime);
document.getElementById('stop').addEventListener("click", stopTimer);

const setNameButton = document.getElementById('set');
const nameInput = document.getElementById('name');
const span = document.getElementById('span');

setNameButton.addEventListener('click', () => {
  const enteredName = nameInput.value.trim();
  if (enteredName !== '') {
    nameDisplay.textContent = `Hello, ${enteredName}!`;
    document.body.appendChild(span);
  } else {
    alert('Please enter your name!');
  }
});


document.getElementById('restart').addEventListener("click", () => {
  let TotalNumber_set = 81;
  const buttons = [];
  const number_set = new Set();
  const number = [];
  var CaratArray = [];

  //  name change
  localStorage.removeItem('number');

  const container = document.getElementById("number-container");
  container.innerHTML = '';

  const nameInput = document.getElementById('name');
  nameInput.value = '';
  alert("Enter your name to start a new game!");

  // New number generation
  for (let i = 0; i < 9; i++) {
    number[i] = [];
    for (let j = 0; j < 9; j++) {
      var randomValue;
      do {
        randomValue = Math.floor(Math.random() * 9) + 1;
      } while (
        number[i].includes(randomValue) ||
        number.some((row, rowIndex) => rowIndex !== i && row[j] === randomValue) ||
        checkSubGridNew(number, i, j, randomValue) // Changed function name
      );
      number[i][j] = randomValue;
      CaratArray.push(randomValue);
      console.log('CaratArray :', CaratArray);

      if (Math.random() < 0.75) {
        number[i][j] = " ";
      }
    }
  }

  // Generate HTML elements for the numbers
  for (let i = 0; i < number.length; i++) {
    var row = document.createElement("div");
    row.className = "number-row";
    for (let j = 0; j < number[i].length; j++) {
      var numDiv = document.createElement("div");
      numDiv.className = "number";
      numDiv.textContent = number[i][j];
      buttons.push(numDiv);

      numDiv.addEventListener('click', (function(i, j) {
        return function(event) {
          const target = event.target;
          const currentValue = target.textContent;
          
          if (currentValue == " ") {
            const newValue = prompt("Enter a new value (1-9):");
            CaratArray.push(newValue);
            if (!isValidNumber(newValue)) {
              alert("Invalid input. Please enter a number between 1 and 9.");
            } else if (
              number[i].includes(parseInt(newValue)) || 
              number.some((row, rowIndex) => rowIndex !== i && row[j] === parseInt(newValue)) || 
              checkSubGridNew(number, i, j, parseInt(newValue))
            ) {
              alert("this number is not match .");
            } else {
              target.textContent = newValue;
              number[i][j] = newValue; 
              let storedNumber = JSON.parse(localStorage.getItem('number')) || [];
              if (!storedNumber[i]) {
                storedNumber[i] = [];
              }
              storedNumber[i][j] = newValue;
              number_set.add(newValue);

              localStorage.setItem('number', JSON.stringify(storedNumber));
            }
          }
        };
      })(i, j));
      row.appendChild(numDiv);
    }
    container.appendChild(row);
  }
});

// New checkSubGrid function
function checkSubGridNew(arr, row, col, num) {
  if (!arr) {
    console.error("Array is undefined");
    return false;
  }
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (startRow + i < arr.length && startCol + j < arr[0].length && arr[startRow + i][startCol + j] === num) {
        return true;
      }
    }
  }
  return false;
}