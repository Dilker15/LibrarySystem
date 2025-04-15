export class AuthorEntity {
    
    constructor(
      public readonly id: string,         
      public readonly name: string,
      public readonly gender: 'M' | 'F', 
      public readonly nationality: string | null = null,
      public readonly status: boolean = true,
      public readonly createdOn: Date = new Date(),
      public readonly updatedOn: Date = new Date()
    ) {}
  

    public isActive(): boolean {
      return this.status;
    }


    static toAuthorEntity(id:string="",name:string,gender:'M'|'F',nationality:string,status:boolean=true,updated_on:Date,created_on:Date):AuthorEntity{
      return new AuthorEntity(id,name,gender,nationality,status,created_on,updated_on);
    }
  }