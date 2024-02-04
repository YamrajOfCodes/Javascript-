// <!-- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. -->

// <!-- A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed. -->





    // Jevha Promise nahi hot tevha thirdperson library named bluebird use karat hote 
    // pn aata te javascript madhe direct involve karun taklel aahe tr spartae install karanyachi garaj nahi

    // npm install bluebird


                 //  one way to store in variable

    //   const newpromise= new Promise((res,rej)=>{
    //     setTimeout(()=>{
    //         console.log("hello");
    //         res();
    //     },2000);
    //   })

    //   newpromise.then(()=>{
    //     console.log('execute');
    //   })

    //         // another way to creating promise

    //         new Promise((res,rej)=>{
    //             setTimeout(()=>{
    //                console.log("Promise two executed");
    //                res();
    //             },1000)
    //         }).then(()=>{
    //             console.log("execute 2");
    //         })




            const promise= new Promise((res,rej)=>{

                const result=false;  

                setTimeout(()=>{
                    
                  if(result){
                    res({
                        username:"kundan",
                        age:21
                    })
                  }
                  else{
                    rej("Error occur")
                  }

                },1000);

            })

            // promise.then((user)=>{
                
            //     return user.username;

            // }).then((username)=>{
            //     console.log(username)
            // }).catch((error)=>{
            //     console.log(error);
            // })





                       // Async await



            // async function promiseConcuming(){
            //   try{
            //     const result=await promise;
            //   console.log(result);
            //   }catch(e){
            //     console.log(e);
            //   }
            // }

            // promiseConcuming();



                        

                 // Fetch(video avl)

                //  The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status.
                //  You can also optionally pass in an init options object as the second argument (see Request).







            // async function getUsers(){
            
            //   try {
            //     const response=await fetch("https://jsonplaceholder.typicode.com/users");
            //     const data=await response.json();
            //     console.log(data);
            //   } catch (error) {
            //     console.log(error);
            //   }
            
            // }
            

            // getUsers();






                    // Previous method using Promise

                     fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
                      return response.json();
                     }).then((result)=>{
                      console.log(result);
                     })
                     .catch((error)=>{
                      console.log(error);
                     })
                  

                  