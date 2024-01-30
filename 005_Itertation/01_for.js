                        // how for-loop executed that video are available
                        
                        
  for(let i=1;i<=10;i++){
    console.log(i);
  }



// nested loops

  for (let i = 0; i <=10; i++) {
    console.log(`table of ${i}`);

    for (let j = 0; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
  }




  // we can put loop on array as well

  const arr=[0,1,2,3,4,5,6,7];

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    
  }

// why we write index<arr.length not index <= arr.length









                        // Break and continue

            // Break are used to break the control flow
            // Continue are used to skip the current iteration

            for(let i=1;i<=10;i++){
                
                if(i==5){
                    console.log("5 is detect");
                    break;
                    // continue;
                }
                console.log(`i = ${i}`);
            }
