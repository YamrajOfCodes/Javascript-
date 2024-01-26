                               // Rest operator(use of unlimited arguments);


    function Calculate(...num){
            return num;
    }

    const arr=Calculate(100,200,300,400);
    console.log(arr);
        

             // But if


             
    function Calculate(val1,val2,...num){
        return num;
}

const arr1=Calculate(100,200,300,400);
console.log(arr);                                              // Guess the output








                                  // Pass Object in a function
// 1)


  const obj={
    name:"kundan",
    Nickname:"Sonu"
  }


  function passObject(obj){
    console.log(`My name is ${obj.name} and my Nickname is ${obj.Nickname}`);
  }

  passObject(obj);        // we also make an object here in arguments



                                 // Pass array in object

const array1=["Kundan","Kalpesh","Himesh"];


 function myFunction(num){             // we also ...num
    console.log(num);                 //Same as object  
 }

 myFunction(array1);






    
    
