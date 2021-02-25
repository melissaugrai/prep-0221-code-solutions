/* eslint-disable eol-last */
/* eslint-disable indent */
var person = {
    firstName: 'Melissa',
    lastName: 'Ugrai',
    hobby: 'Gaming',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log("Person's Information", person);
console.log("The person's name is: " + person.fullName());

person.job = 'unemployed';
console.log("The person's current job is: " + person.job);

person.previousJob = 'Pharmacy Technician';
console.log("The person's previous job was: " + person.previousJob);
console.log('This is the completed object:', person);

var myCar = {
    make: 'Volvo',
    model: 'Rabbit',
    year: '2008'
};
console.log('Car Information', myCar);

myCar['owner'] = person.fullName();
console.log('My name is', myCar['owner'], 'and I drive a', myCar['year'], myCar['make'], myCar['model']);
myCar['color'] = 'Silver';
console.log('Updated Car Information', myCar);