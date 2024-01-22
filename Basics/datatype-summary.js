// datatypes in javascript 

// there are two types of datatypes in JS
//  1) Primitive 2) Non primitive 
//  the datatype are categorized by how they stored and access in memory means 
//  call by value and call by reference



// 1) Primitive

    // 7 types (these are call by value) : String Number Boolean Null Undefined BigInt symbol
    // there is no float or double let a=1234.15 number aahe mhnje numver

 // Reference type (Non-Premitive type)
 
   // Arrays Objects Functions



//    Javascript is dynamically value      because during variable defined we not mantioned about which type of datatype this is JS IDENTIFIED dynamically





   const number=1213;
   const floatnumber=3439.23;

   const str="hello";
   const boolean=true;
   const value=Symbol('121');
   const integer=7428347283478234323n
   let val;
   const values=null;



   console.log(typeof number)
   console.log(typeof floatnumber)
   console.log(typeof str)
   console.log(typeof boolean)
   console.log(typeof value)
   console.log(typeof integer)
   console.log(typeof val)
   console.log(typeof value)



   // Non Primitive

   const arr=[1,2,3,4,5];                         // Non primitive madhe sarvanche datatype object astat pn function che function pan te pn object functions

   const obj={
    name:'kundan',
    age:22
   }

   const newFunction=()=>{
    console.log("Hello world");
   }



   console.log(typeof arr);
   console.log(typeof newFunction)
   console.log(typeof obj);









      
       