// Conversion

let a="33";

console.log("a=",a);

// How to convert string to number

let num=Number(a);  //Converted

console.log(typeof num);   //const {password}=req.body  he check karyale ki number ch bhetla aahe n




// but

let b='332a';

let check=Number(b);
console.log(typeof check);
console.log('but the actual value is',check);


// "33" => 33
// "33ab" => Nan
// true => 1; and false =>0




// any value to boolean


const value=78780;

const bool=Boolean(value);

console.log(bool);


//"" => false
//"kk"=> true
//7832800=> true    ek pan 0 chya vare value asel tar true



// any number to String

let marks=78;

const marksinstring=String(marks);
console.log(typeof marksinstring);




// Operations

console.table(["1"+2,  1+"2" , "1"+1+1, 1+1+"1", 1+"1"+1]);



// Prefix and Postfix

let x=3;
const y=x++;

console.log("the value of x=",x+" and the value of y is",y);


let m=3;
let n=++m;

console.log("m=",m+" n=",n);

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

