

const setuser=function setuser (username){
    this.username=username;
}

const createuser=function(name,age,email){
  
    setuser.call(this,name);

    this.age=age;
    this.email=email;
}

const chai=new createuser("kk",18,"kk@example.com");

console.log(chai);












            //    Objects

            console.log(Object.getOwnPropertyDescriptor(Math,"PI"));           // 1st params konta object second aani tyachi konti property
            // Math.PI chi value aapn change nahi karu shkt karan tyachi property writable: false kaleli aahe

            // aapn aaplya obj la pn properties define karu shkto

            const obj={
                city:'yawal'
            };

            console.log(Object.getOwnPropertyDescriptor(obj,"city"));           
            // aata properties define karu


           console.log(obj.city="vyasNagri");

            Object.defineProperty(obj,"city",{
                writable:false
            })

            console.log(obj.city="Yawal");         // tumhi write karu shkta pn te origional madhe change nahi hot
            console.log(obj);

