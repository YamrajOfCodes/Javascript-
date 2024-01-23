// String is a collection of characters
// To concat string we used mordern technic known as String interpolation means backtics

 const str1="hello";


console.log(`${str1} my name is kundan`);     // also known as Template Literals





  // There are two ways to define string

  // 1) const str="First method"
     const str=new String("Hello");
    //  console.log(str);



     // Functions of strings

     let newString=str.charAt('1');
     console.log(newString);

     newString=str.indexOf("l");
     console.log(newString);

     newString=str.substring(0,3)
     console.log(newString);   // ya mashe negetive value nahi deu shakatat

     newString=str.slice(0,4);   // ya madhe negetive value deu shaktat
     console.log(newString);

     // he 2 shevtachi value nahi pkdta

     

      const str2="  hello ";
      console.log(str2.trim());

      // he fkt white space remove karat there are also trimstart and trimend function ny default they remove both

      const replace=str2.replace("hello","world");
      console.log(replace);


      // we can also

      const replace2=str2.trim().replace("hello","world");
      console.log(replace2);

      // We also ask question 

      console.log(replace2.includes("hello"));

      





