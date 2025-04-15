export class BookEntity {



    constructor(
      public readonly id: string,         
      public readonly isbn: string,
      public readonly name: string,
      public readonly description: string | null = null,
      public readonly imageUrl: string | null = null,
      public readonly status: boolean = true,
      public readonly categoryId: string | null = null, 
      public readonly createdAt: Date = new Date(),
      public readonly updatedAt: Date = new Date()
    ) {}
  
   
    public isValid(): boolean {
      return this.isbn.length >= 10 && !!this.name.trim();
    }
  
    public isAvailable(): boolean {
      return this.status;
    }
  
    public belongsToCategory(): boolean {
      return this.categoryId !== null;
    }

    static toBookEntity(id:string="",isbn:string,name:string,description:string,imageUrl:string,status:boolean=true,categoryId:string,created_on:Date=new Date(),updated_on:Date=new Date()):BookEntity{
        return new BookEntity(id,isbn,name,description,imageUrl,status,categoryId,created_on,updated_on);
    }
  }