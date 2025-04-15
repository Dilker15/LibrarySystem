


export class UpdateUserDto{
    
    public name:string;
    public last_name:string;
    public email:string;
    public password:string;
    public rol_id:string;
    public state:boolean;

    constructor(name:string,last_name:string,email:string,pass:string,rol_id:string,state:boolean){
        this.email=email;
        this.name=name;
        this.password=pass;
        this.last_name=last_name;
        this.rol_id=rol_id;
        this.state=state;
    }

    static generate(body:{[key:string]:any}):UpdateUserDto{
        return new UpdateUserDto(body.name,body.last_name,body.email,body.password,body.rol_id,body.state);
    }
}