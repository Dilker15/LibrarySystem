


export class UpdateStudentDto{

    public dni:string;
    public name:string;
    public last_name:string;
    public email:string;
    public address:string;
    public cellphone:string;
    public gender:'M'|'F';
    public status:boolean;

    constructor(dni:string,name:string,last_name:string,email:string,address:string,cellphone:string,gender:'F'|'M',status:boolean){
        this.dni=dni;
        this.name=name;
        this.last_name=last_name;
        this.email=email;
        this.address=address;
        this.cellphone=cellphone;
        this.gender=gender;
        this.status=status;
    }


    static generate(body:{[key:string]:any}):UpdateStudentDto{
        return new UpdateStudentDto(body.dni,body.name,body.last_name,body.email,body.address,body.cellphone,body.gender,body.status);
    }


}