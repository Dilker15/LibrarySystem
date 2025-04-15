


export class LoginDto{

    public email:string;
    public password:string;

    constructor(email:string,password:string){
        this.email=email;
        this.password=password;
    }

    static generate(body:{[key:string]:any}):LoginDto{
        return new LoginDto(body.email,body.password);
    }

    

}