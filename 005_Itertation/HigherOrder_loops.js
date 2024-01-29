        // For Of Loop


        const arr=[0,1,2,3,4,5];

        for (const num of arr) {
            console.log(num);
        }


        const map=new Map();
        map.set("name","kundan");
        map.set("work","engineer");

        // console.log(map)

        for(const mapping of map){
            // console.log(mapping);
        }                                   // but we do not want that output


        for (const [key,value] of map){
            // console.log(`${key} => ${value}`)
        }







            // object iteration


            const obj={
                name:'John Doe',
                age:24,
                city:'America'
            }

            // for (const [key,value] of obj){
            //     // console.log(obj);                              // error object is not iteratable
            // }




                  
                             // for In Loop

// for in loop keys return karto syntax are same

for (const key in obj){
    console.log(key);
}

// but we want value not keys 

for (const key in obj){
    console.log(obj[key]);
}


// for In array pan same iterarte karto 



                        // forOF vs forIN

                        //1) forof not iterartable on object and forIn are iteratable
                        //2) forOf values return karto direct while other hand forIn keys return karto



    // Note object iterate karyasathi aapn forof cha use karu 
    // array sathi forin