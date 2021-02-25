// addTwoNumbers
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResults = addTwoNumbers(2, 2);
console.log('addTwoNumbers Function', addTwoNumbersResults);

// convertHoursToMinutes

function convertHoursToMinutes(number) {
  return number * 60;
}

var convertHoursToMinutesResults = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Function', convertHoursToMinutesResults);

// personalizeGreeting

function personalizeGreeting(name) {
  return 'Hello ' + name + '!';
}

var personalizeGreetingResult = personalizeGreeting('World');
console.log('personalizeGreeting Function', personalizeGreetingResult);

// addAndMultiplyBy5

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Results = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Function', addAndMultiplyBy5Results);

// multiplyAndDivideBy5

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Results = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Function', multiplyAndDivideBy5Results);

// subtractTwoNumbers

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResults = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Function', subtractTwoNumbersResults);

// getCircleCircumference

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Function', getCircleCircumferenceResult);

// getFullName

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResults = getFullName('Juan', 'Ramirez');
console.log('getFullName Function', getFullNameResults);

// cube

function cube(number) {
  return Math.pow(number, 3);
}

var cubeResults = cube(5);
console.log('cube Function', cubeResults);
