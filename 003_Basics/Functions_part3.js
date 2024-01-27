                                      // Global and Local scope

 if(true){
   
// let b=20;
// const c=30
var a=10;

  }


//  console.log(a);
//  console.log(b);
 console.log(a);                       // the var also accessible here and that is a problem




 // je {} madhe te local(block) scope but je {} chya baher dec.. te global scope







                                   // Guess the output

            // function one(){
            //   const website="hungryrats";

            //   function two(){
            //     const domain="www";
            //     console.log(website);
            //   }
 
            //    console.log(domain);
            //    two();


            // }

            // one();


                   
                             // Mini Hoisiting //



        addone(5);                                          // this function executes before initillization if declare 

        function addone(num){
          return num+1;
        }


        addtwo(6);                                          // this functiom cannot access before initillization

        const addtwo=function(num){
          num+1;
        }



