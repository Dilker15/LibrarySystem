


export class CreateStudentDto{

    public dni:string;
    public name:string;
    public last_name:string;
    public email:string;
    public address:string;
    public cellphone:string;
    public gender:'M'|'F';

    constructor(dni:string,name:string,last_name:string,email:string,address:string,cellphone:string,gender:'M'|'F'){
        this.dni=dni;
        this.name=name;
        this.last_name=last_name;
        this.email=email;
        this.address=address;
        this.cellphone=cellphone;
        this.gender=gender;
    }


    static generate(body:{[key:string]:any}):CreateStudentDto{
        return new CreateStudentDto(body.dni,body.name,body.last_name,body.email,body.address,body.cellphone,body.gender);
    }

}