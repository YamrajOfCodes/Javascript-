                    // class         

                 // setter lihl tr getter pn lihnch padin ekbhi lihl tr dusr pn you hv to write   

 class users_class{
    constructor(name,password){
     
        this.name=name;
        this.password=password;

      
    }


    set password(password){
        
        this._password=password

    }

    get password(){
        return _password
    }

 }

 const newUser= new users_class("kk",123);
 console.log(newUser);