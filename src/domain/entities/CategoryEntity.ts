export class CategoryEntity {
    constructor(
      public readonly id: string,          
      public readonly name: string,
      public readonly status: boolean = true,
      public readonly createdAt: Date = new Date(),
      public readonly updatedAt: Date = new Date()
    ) {}
  
 
    public isValid(): boolean {
      return this.name.length >= 3 && this.name.length <= 50;
    }
  
    public canBeDeactivated(): boolean {
      return this.status === true; 
    }

    
    static toCategoryEntity(id:string="",name: string,status: boolean = true): CategoryEntity {
        return new CategoryEntity(id,name,status,new Date(),new Date());
}
}