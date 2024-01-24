// Date has been a long-standing pain point in ECMAScript. This is a proposal for Temporal, a global Object that acts as a top-level namespace (like Math), 
// but now we used Date


const date = new Date();

console.log(date.toString());   // using these step we get output but not in readable form

console.log(date.toDateString());
console.log(date.toLocaleString());      // useFul

console.log(typeof date);      //new aahe mhnje object



let ourDate=new Date("01-24-2024");
console.log(ourDate.toDateString());
console.log(ourDate.getTime());                               // ha toh exact time aahe joh kamat yet 
                                                              // Pol banavyala and quizzes banavayla
                                                              // means je date aahe tya veles cha exact time sathi

                                
           // How to convert into seconds

          let newdate=Date.now();
          console.log(Math.round(Date.now()/1000));   





          // fkt jar specific date , month  , year kadhayach asel tar

          let month=new Date().getMonth()+1;     // because 0 pasun start hot
          console.log(month);

          let Currdate=new Date().getDate();
          console.log(Currdate);


          // customized date

         let customDate= new Date().toLocaleString("default",{
            weekday:'long',
            month:'2-digit'
         });

         console.log(customDate);

