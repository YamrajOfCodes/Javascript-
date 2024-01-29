
const newObj=new Object();      // singleton object

const useObject={
    name:'Kundan',
    age:22,
    Full_name:{
        First_Name:"Kundan",
        Middle_Name:"Nivrutti",
        Last_Name:"Patil"
    }
}

// console.log(useObject.Full_name?.First_Name);


const obj1={
    1:'a',
    2:'b'
}

const obj2={
    3:"c",
    4:"d"
}

const obj3={
    ...obj1,                       // way to merge an two object
    ...obj2
}
// console.log(obj3);



//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object

const obj4=Object.assign({},obj1,obj2);     // actually obj 1 and obj 2 {} madhe jaat aahe jar nahi del tar te obj 1 madhe jatil
console.log(obj4);





                                        //Methods


                console.log(Object.keys(obj1));
                console.log(Object.values(obj1));

                console.log(Object.entries(obj1));                 // jo key value aahe tyla array madhe means array madhe array
                console.log(obj1.hasOwnProperty('1'));










                // Object Destructuring
// Destructuring is a JavaScript expression that allows us to extract data from arrays, objects
// aapn je access kartat . notation ne te karnaevji destructuring kara

const Obj={
    Party:'BJP',
    seats:333,
}

const {Party}=Obj;

console.log(Party);

const {Party : team}=Obj;

console.log(team);


