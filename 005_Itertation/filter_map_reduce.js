

            // for each problem aahe ki to value return nahi karat
            // mhnun aapn filter and map use karato (Video Available)



                   // Filter


    const num=[1,2,3,4,,5,6,7,8,9];

   const arr= num.filter((element)=> element > 4 );                                 // implicit retrun concept

    // console.log(arr);


   const arr1= num.filter((element)=> {
    return element > 4;
   } );                                            // explicit retrun concept

//    console.log(arr1);






                                            // but jr he same for each ne karaych asel tr

        const newArr=[];

        num.forEach((element)=>{
            if(element>4){
                newArr.push(element)
            }
        })

        console.log(newArr)












        
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


       const history=books.filter((books)=>{
         if(books.publish>2000){
            return books
         }
       }
       )

       console.log(history);



       // Exercise print those books whose publication date are after 2000;
       // Exercise print those books whose publication date are after 2000 as well as genre is history;
