// Memory in JS

//                               There are two types of memory 

// 1)Stack    2) Heap


// je primitive datatypes astat te stack madhe store hotat
// je nonPrimitive datatypes astat te Heap madhe store hotat


// when stack memory used means you got a copied to that variable
// when object, function goes in Heap you got a reference
  

  const namee="kundan";

  let anothername=namee;
 
  anothername="Yash";

  console.log(namee);        // not changed because you got a copied
  console.log(anothername);   



  const obj={
    name:"kundan",
    age:22
  }

  const obj1=obj;

  obj1.name="yash";

  console.log(obj.name);           // changed because te reference karat copy nahi milat t kahipn change kara reference chchnge hoil