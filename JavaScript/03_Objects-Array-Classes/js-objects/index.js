const person = {
  x: 10,
  firstName: 'Ankit',
  lastName: 'Panda',
  hobbies: ['Coding', 'Gym'],
  isMarried: false,
  getFullName: function () {
    return 'Ankit Panda'
  },
  address: {
    hno: 1,
    street: 1,
    state: 'OD',
    countryCode: 'IN',
  }
}

// console.log(person.address.state);

const remote = {
  color: 'black',
  brand: 'XYZ',
  dimensions: { height: 1, width: 1 },
  turnOff: function () {

  },
  volumeUp: function () {

  },
}

// let fname = 'Hitesh'
// let fname2 = fname

// console.log(fname);
// console.log(fname2);

// fname2 = 'Piyush'

// console.log(fname2);

let p1 = {
  fname: 'Hitesh',
  lname: 'Choudhary',
  address: {
    h:1,s:1
  }
}

const p1KaString = JSON.stringify(p1)
console.log(p1KaString);


let p2 = {
  fname:p1.fname,
  lname:p1.lname,
  address:p1.address
}

// let p2 = {
//   ...p1 // Spread Operator
// }

p2.fname = 'Piyush'

console.log(p2);
console.log(p1);