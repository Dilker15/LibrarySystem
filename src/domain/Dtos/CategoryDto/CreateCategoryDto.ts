


export class CreateCategoryDto{


    public name:string;
    public state:boolean;
    public created_on:Date;
    public updated_on:Date;
  

    constructor(name:string){
        this.name=name;
        this.created_on=new Date();
        this.updated_on=new Date();
        this.state=true;
    }


    static generate(body:{[key:string]:any}):CreateCategoryDto{
        return new CreateCategoryDto(body.name);
    }
    



}