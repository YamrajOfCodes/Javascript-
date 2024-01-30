                            // Map Function

                // suppose aaplyala numbers madhe 5 add karayche aahe

        const numbers=[1,2,3,4,5,6,7,8,9,10];

        const newArray=numbers.map((num)=>{
            return num + 5;
        })

        // console.log(newArray);








                 // chaining

                 const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

                 // const newNums = myNumers.map( (num) => { return num + 10})
                 
                 const newNums = myNumers
                                 .map((num) => num * 10 )
                                 .map( (num) => num + 1)
                                 .filter( (num) => num >= 40)
                 
                //  console.log(newNums);









                 // Reduce method ( Video available )


                const array=[1,2,3];

                const newArrays=array.reduce((acc,curr) => acc + curr , 0  );

                // console.log(newArrays);



                // example of shopping cart

                const cart=[
                    {
                        name:'tv',
                        price:8999
                    },
                    {
                        name:'phone',
                        price:30299
                    },{
                        name:'charger',
                        price:1999
                    }
                ]


                const total_bill=cart.reduce((acc,curr) => acc + curr.price,0 );

                console.log(total_bill);