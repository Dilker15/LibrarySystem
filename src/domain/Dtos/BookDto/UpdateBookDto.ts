


export class UpdateBookDto{

    public isbn:string;
    public name:string;
    public description:string;
    public image:File;
    public category_id:string;
    public authors:{name:string,nationality?:string}[];

    constructor(isbn:string,name:string,description:string,image:File,category_id:string,authors:{name:string,nationality?:string}[]){
        this.isbn=isbn;
        this.name=name;
        this.description=description;
        this.image=image;
        this.category_id=category_id;
        this.authors=authors;
    }

    static generate(body:{[key:string]:any}):UpdateBookDto{
        return new UpdateBookDto(body.isbn,body.name,body.description,body.image,body.category_id,body.authors);
    }
}