                         // ForEach loop

    const arr=[1,2,3,4,5];

    arr.forEach((item)=>{
        // console.log(item);
    })


    const fruits=["mango","Banana","apple","Graps","Kiwi"];

    fruits.forEach((element,index,arr_list)=>{                       // fkt elements nahi yetat index pn yete
        // console.log(element,index,arr_list);
    })





            // another way to passing a function






    fruits.forEach(print_statement);




    function print_statement(param){
        // console.log(param);
    }




            // iterate objects array

            const objects=[
                {
                    name:'kalpesh',
                    city:'Waghoda'
                },
                {
                    name:"kundan",
                    city:"yawal"
                },
                {
                    name:"Yash",
                    city:"yawal"
                }
            ]


            objects.forEach((elements)=>{
              console.log(elements.city);
            })
