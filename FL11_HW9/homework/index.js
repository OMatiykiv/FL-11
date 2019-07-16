// task №0
let getNumbers = (argum) => {
    let arg = argum.split('');
    let num = [];

    for (let i = 0; i < arg.length; i++) {
        const minNum = 0;
        const maxNum = 9;
        if (arg[i] >= minNum && arg[i] <= maxNum) {
            num.push(arg[i]);
        }  
    }

    return num;
};

//task №1
let findTypes = (...argum) => {
    let datatypes = {};
  
    for (let i = 0; i < argum.length; i++) {
      if (!datatypes[typeof argum[i]]) {
        datatypes[typeof argum[i]] = 1;
      } else {
        datatypes[typeof argum[i]] += 1;
      }
    }
  
    return datatypes;
};
  
//task №2
let executeforEach = (arr, func) => {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
};

//task №3
let mapArray = (arr, func) => executeforEach(arr, func);

//task №4
let filterArray = (arr, func) => {
    let cloneArray = [];

    for (let i = 0; i < arr.length; i++) {
        cloneArray[i] = arr[i];
    }
    let filteredArray = [];
    executeforEach(arr, func);

    for (let i=0; i < cloneArray.length; i++) {
        if (arr[i] === true) {
            filteredArray.push(cloneArray[i]);
        }
    }

    return filteredArray;
  }

//task №5
let showFormattedDate = (date) => {
    let options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };
    let shortFormat = date.toLocaleString('en-GB', options).toString().split(' ');
    const zero = 0;
    const one = 1;
    const two = 2;

    return 'Date: ' + shortFormat[one] + ' ' + shortFormat[zero] + ' ' + shortFormat[two];
};

//task №6
let canConvertToDatefunction = (strDate) => {
    let date = new Date(strDate);
    return !isNaN(Date.parse(date));
};

//task №7
let daysBetween = (date1, date2) => {
    const day = 24;
    const hour = 60;
    const minute = 60;
    const second = 1000;
    const dayTime = day * hour * minute * second;

    return Math.round((date2.getTime() - date1.getTime()) / dayTime);
};

//Inputed data for tasks №8
const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'  
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'      
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];
  
//task №8
let getAmountOfAdultPeople = (people) => {
    const year = 365;
    const adultAge = 18;
    const legalAge = year * adultAge;

    let adult = filterArray(people, i => {
        return daysBetween(new Date(i[' birthday ']), new Date()) >= legalAge;
    });
    
    return adult.length;
};
  
  //task №9
let keys = (obj) => {
    let keysArray = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keysArray.push(key);
        }
    }

    return keysArray;
};
  
  //task №10
let values = (obj) => {
    let valuesArray = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            valuesArray.push(obj[key]);
        }
    }

    return valuesArray;
};
