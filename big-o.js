//Counting Sheep iterative
function countDownSheep(num) {
    while (num > 0) {
      num --;
      console.log('Another sheep jumps over the fence');
    }
    console.log('All sheep jumped over the fence')
}


//Power Calculator Iterative
function powerCalculator(base, exponent) {
    // condition
    let solution = 1;
    if (exponent < 0) {
      return 'exponent should be >= 0';
    }
    
    while (exponent > 0) {
      exponent--;
      solution *= base;
    }
    return solution; 
}


//Reverse String Iterative
const reverseString = (str) => {
    if (str.length === 0) {
      return '';
    }
     const newStr = str.split('') // [ 'a', 'p', 'p', 'l', 'e' ]
    
     let intialIndex = str.length;
    
     const reverseArray = []
     while (intialIndex > 0) {
      intialIndex --;
      reverseArray.push(newStr[intialIndex]);
     }
     return reverseArray.join('');
}


//nth triangular Number Iterative
const nTriangularNum = (num) => {
    if (num < 1) {
      return 'num must be 1 or greater'
    }
    let count = 1;
    while (num > 1) {
      count += num;
      num --;
    }
    return count;
}


//string splitter iterative
const stringSplitter = (string, splitter) => {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        if(string[i] === splitter) {
            let temp = string.substr(0, string.indexOf(splitter))
            string = string.substr((string.indexOf(splitter) + 1), string.length)
            arr.push(temp)
        }
    }
    return arr;
}
console.log(stringSplitter('03/23/2020', '/'));

//fibonacci iterative
function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      console.log(arr[i - 2] + arr[i -1])
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
}

//factorial iterative
const factorial = (num) => {
    if (num < 2) {
      return num;
    }
  
    let product = 1;
    while (num > 1) {
      product *= num;
      num--; 
    }
    return product
}