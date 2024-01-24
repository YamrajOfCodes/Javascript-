// arrays in javascript enables a collection of values under a single variable
// javascript array is resizable
// enables mixing of datatypes  like arrays in arrays
// when we perform copy operation on the array he performs shallow copy rather than deep copies
// shallow capy is like heap means all the non-primitive datatypes are stored in heap so shallow copy means when you copy array and performs some operation on that copy array these also affect origional array
// shallow copy share properties of same reference

    
                                         // Javascript Arrays Methods

 const arr=[0,1,2,3,4,5];

 arr.push(6);                         // last la add karto
 console.log(arr);

 arr.pop();                           // je last aahe te remove karto
 arr.pop();
 console.log(arr);


 arr.unshift(1);                     // start la add karto 
 console.log(arr);

 arr.shift();                        // start la je aahe te remove karto
 console.log(arr);




                       // question vicharat aapn te methods

            const arrays=[1,2,3,4,5];

            console.log(arrays.includes(0));                                   //0 he aahe ka array madhe
           console.log(arrays.indexOf(1));                                     // 1 chi position kay








                       // methods we often used 

        const newArray=new Array(21,22,23,24,25,26);  

        console.log(newArray.splice(2,3));  

        // the difference is in slice we don't include last index while in splice we includes last index
       // main diiference is splice manupulate origional array slice does't


       //join operation binding elements and convrt array into string



