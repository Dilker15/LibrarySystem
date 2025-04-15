
export class AuthorBookEntity {
    constructor(
      public readonly id: string,         
      public readonly bookId: string,     
      public readonly authorId: string,   
      public readonly status: boolean = true,
      public readonly createdAt: Date = new Date(),
      public readonly updatedAt: Date = new Date()
    ) {}
  
   

    public isActive(): boolean {
      return this.status;
    }
  
    public hasValidReferences(): boolean {
      return !!this.bookId && !!this.authorId;
    }

    static toAuthorBookEntity(id:string="",bookId:string,authorId:string,status:boolean=true,created_on:Date=new Date(),updated_on:Date=new Date()):AuthorBookEntity{
         return new AuthorBookEntity(id,bookId,authorId,status,created_on,updated_on);
    }

  }