                            //    ES6 Concept              Video Available

            const obj={
                name:'Kundan',
                age:22,
                welcome:function(){
                    console.log(`${this.name} , welcome to you`);
                }
            }                

            obj.welcome();                      // these refers Current Context


        // but we cannot access variable in Function like this using in functions

        // function context(){
        //     const name="kundan";
        //     console.log(this.name);                         // never work
        // }











              // Arrow Functions


              const arrow=()=>{
                console.log("hello world");
              }

              arrow();


            //   there are Implicitely and exlpicitely arrow functions which related to return explain in video 

