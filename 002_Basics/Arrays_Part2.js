                                 // Merge two arrays

const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];
const arrays=[11];
// arr1.push(arr2);

// console.log(arr1);

// but array is not merge 

console.log(arr1[6]);  // undefined output

// using concat method

const newArray=arr1.concat(arr2);  //concat modiifies and returns new array
console.log(newArray);

// but people uses spread operator




const another_array=[0,1,2,3,[4,5,[6,7]]]     // if these situation occurs we used flat method

const new_array=another_array.flat(2);    // returns a new array 2 is a depth ki kitparyant karaycha aahe

console.log(new_array);




// sometimes from backend data comes in the format of string, object but if we want convert into array then

const str="hello";

console.log(Array.isArray(str));  // asking methods Array.isArray

console.log(Array(str));
console.log(Array.from(str));
console.log(Array.of(str));




const num1=[1,2,3,4];
const num2=[5,6,7,8];

// console.log(Array.from(num1,num2));
console.log(Array.of(num1,num2));
console.log(Array.from({
    name:'kunda'
}));                                           // returns empy array karan te banu nahi shkl because e mantioned karav lagel ki kashala arrya banavaych ahe key la ki value la





