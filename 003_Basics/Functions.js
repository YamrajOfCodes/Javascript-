//a set of statements that performs a task or calculates a value

// Function is a like where we wrap a lines of codes and use that function anywhere

function myName(){
    console.log("My name is kundan");
}

myName                        // this is the reference
myName();                     // execute the function



//parameterers


function calculate(num1,num2){                                          // parameter
    console.log(num1+num2);
}

calculate(10,10);                                                       // Argument






function calculate(num1,num2){                                         
    const num3=num1+num2;
    return num3
}

const result=calculate(10,10);     

console.log(result);



                                        // Bulding a Concept
 

        function hello(_username){
            return `hello {_username}`;                       
        }

        hello("kundan");                                             // this concept explain in video






        function hello(_username){
            if(_username){

                return `hello ${_username}`;                       
            }
            console.log("Invalid value");
        }

       console.log(hello("kundan"));                                 // retrun keleli value console log kara 
       
       



       function hello(_username="kk"){                                        // default paramerter
        if(_username){

            return `hello ${_username}`;                       
        }
        console.log("Invalid value");
    }

   console.log(hello());                         