// console.log("hello world")


// In JavaScript, call, apply, and bind are methods used to manipulate the this context of functions, 

// The call method allows you to invoke a function with a specified this context and arguments provided individually.

 function greetings(greet){
    console.log(`${greet} ${ this.name}`);
 }

 const obj={
    name:"kundan"
 }

 greetings.call(obj,"hello")



//  apply
// The apply method is similar to call, but it takes arguments as an array instead of listing them individually.


     function hello(first,second){
        console.log(`hello ${this.name},${first} and ${second}`);
     }
     
     const newobj={
        name:"yash"
     }

     hello.apply(newobj,["kundan","himesh"])




     //bind

     // its is used to bind and keep a copy of that method and use it later 
     // the only difference between that does not directly invoked the function rather it give a copy of that function to use it later 
