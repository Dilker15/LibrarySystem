export class BookEntity {



    constructor(
      public readonly id: string,         
      public readonly isbn: string,
      public readonly name: string,
      public readonly description: string | null = null,
      public readonly imageUrl: string | null = null,
      public readonly status: boolean = true,
      public readonly categoryId: string | null = null, 
      public readonly authors:{name:string,nationality?:string}[],
      public readonly createdAt: Date = new Date(),
      public readonly updatedAt: Date = new Date()
    ) {

    }
  
   
    public isValid(): boolean {
      return this.isbn.length >= 10 && !!this.name.trim();
    }
  
    public isAvailable(): boolean {
      return this.status;
    }
  
    public belongsToCategory(): boolean {
      return this.categoryId !== null;
    }

    static toBookEntity(data:{[key:string]:any}):BookEntity{
        return new BookEntity(data._id,data.isbn,data.name,data.description,data.image,data.status,data.category_id,data.authors,data.created_on,data.updated_on);
    }
  }