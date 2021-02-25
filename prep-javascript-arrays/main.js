var languageArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log('Language Array:', languageArray);
console.log('Array length:', languageArray.length);

languageArray.push('C#', 'php');
console.log('Updated Array', languageArray);

languageArray.pop();
console.log('Updated Array', languageArray);

languageArray.unshift('C++');
console.log('Updated Array', languageArray);

languageArray.shift();
console.log('Updated Array', languageArray);

var thirdElement = languageArray[2];
console.log('3rd element in array', thirdElement);

var arrayLength = languageArray.length;
console.log('The final length of this array:', arrayLength);

var lastItem = languageArray[languageArray.length - 1];
console.log('The last item in array:', lastItem);
