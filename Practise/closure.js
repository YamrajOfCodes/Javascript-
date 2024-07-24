// lexical scoping

function x(){
    const a=10;
    function y(){
        console.log(a);  // y tries to run it find a inside local memory store not find it goes in its lexical scoping
    }
    y();
}
x();


// closuere

// A closure is the combination of a function bundled together with references to its lexical environment. 

function a(){
    let x=5;
    function b(){
        console.log(x);
    }
    return b;
}

const z= a();
z()     

// how it is possible function a has complete their execution so means there is no longer x but still we can access it
// when your return b not only b function is return but closure was returned 
// it has power to remember its craetion enviorment


// in simple term closure is function along with its lexical scope bundle forms closure

// in previous example b forms a closure along with a 




                        // usecases of closures

//               1)        Closures allow you to create functions with preset parameters. This technique is often used to create a more specialized function from a more general one.

// function createAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// const add5 = createAdder(5);
// console.log(add5(2)); // 7
// console.log(add5(10)); // 15
    


            // 2)

// Maintaining State in Asynchronous Operations:
// Closures help maintain the state in asynchronous code, such as in setTimeout or setInterval.



// function createTimers() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// createTimers(); // 1, 2, 3, 4, 5 (each after 1 second)
      

