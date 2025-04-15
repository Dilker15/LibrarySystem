import { BCrypt } from "../../config/BCrypt";



export class CreateUserDto{

    public name:string;
    public last_name:string;
    public email:string;
    public password:string;
    public role_id:string;

    constructor(name:string,last_name:string,email:string,password:string,rol:string){
        this.name=name;
        this.last_name=last_name;
        this.email=email;
        this.password=password;
        this.role_id=rol;
    }


    static  async generate(body:{[key:string]:any}):Promise<CreateUserDto>{
        const hash = await BCrypt.hashPassword(body.password);
        return new CreateUserDto(body.name,body.last_name,body.email,hash,body.rol_id);
    }


}

