// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.

// we create objects using two ways
// 1) Singleton using constructor
//   Object.create
// 2) using template Literals


const mySymbol=Symbol("Key1");                                     // Interview question how to define Symbol in object

 const myObj={
    name:"kundan",
    age:18,
    [mySymbol]:"key1",
    isLoggedIn:"true",
    "address":"Shree swami samarth nagar,Yawal"                  // Key inside string consider keli jate
 };

 console.log(myObj[mySymbol]);
 console.log(myObj.name);
 console.log(myObj["address"]);


 //   aapn objects madhe change karu shakto javascript objects are mutable if we want to not anyone change our object after define we used freez method

//    Object.freeze(myObj);                  //Object freezing
//    myObj.name="Himesh";

   console.log(myObj);

   // one of use of this keywrd
 
   //jar same objetc madhun ek key refer karaychi asel tar

   myObj.myFunction=function (){
    console.log(`Hello My name is ${this.name}`);
   }

   console.log(myObj.myFunction());