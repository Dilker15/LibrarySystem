


export class UpdateCategoryDto{

    public name:string;
    public state:boolean;


    constructor(name:string,state:boolean){
        this.name=name;
        this.state=state;
    }

    static generate(body:{[key:string]:any}):UpdateCategoryDto{
        return new UpdateCategoryDto(body.name,body.state);
    }
}