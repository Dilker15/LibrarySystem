export class UserEntity {
    constructor(
      public readonly id: string,
      public readonly name: string,
      public readonly lastName: string,
      public readonly email: string,
      public readonly password: string,
      public readonly roleId: string,
      public readonly state:boolean,
      public readonly createdAt: Date = new Date(),
      public readonly updatedAt: Date = new Date()
    ) {}
  
    
  
  
  
    static toUserEntity(id:string ,name: string, lastName: string, email: string, password: string,roleId: string,state:boolean): UserEntity {
      return new UserEntity(id, name, lastName, email, password, roleId,state);
    }
  }