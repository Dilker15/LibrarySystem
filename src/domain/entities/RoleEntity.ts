

export class RoleEntity {
    constructor(
      public readonly id: string,       
      public readonly name: string,
      public readonly status: boolean = true,
      public readonly createdAt: Date = new Date(),
      public readonly updatedAt: Date = new Date()
    ) {}
  
  
    public isValid(): boolean {
      return this.name.length >= 3 && 
             this.name.length <= 30 &&
             /^[A-Za-z_]+$/.test(this.name); 
    }
  
    public canBeDeactivated(): boolean {
      return this.status && 
             this.name !== 'ADMIN'; 
    }
  
    public toggleStatus(): RoleEntity {
      if (!this.canBeDeactivated()) {
        throw new Error("No se puede desactivar este rol");
      }
      return new RoleEntity(
        this.id,
        this.name,
        !this.status,
        this.createdAt,
        new Date()    
      );
    }
  
    static toRoleEntity(id:string="",name:string,status:boolean=true,created_on:Date=new Date(),updated_on:Date=new Date()):RoleEntity{
        return new RoleEntity(id,name,status,created_on,updated_on);
    }
   
  }