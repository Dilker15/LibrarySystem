export class StudentEntity {
    constructor(
      public readonly id: string,
      public readonly dni: string,
      public readonly name: string,
      public readonly lastName: string,
      public readonly email: string,
      public readonly address: string,
      public readonly cellphone: string | null = null,
      public readonly gender: 'M' | 'F',
      public readonly status:boolean,
      public readonly emailVerified: boolean = false,
      public readonly createdAt: Date = new Date(),
      public readonly updatedAt: Date = new Date()
    ) {}
  
    public static toStudentEntity(props:{[key:string]:any}): StudentEntity {
      return new StudentEntity(
          '',
          props.dni,
          props.name,
          props.last_name,
          props.email,
          props.address,
          props.cellphone ?? null,
          props.gender,
          props.status ?? true,
          props.email_verified,
          props.createdAt ?? new Date(),
          props.updatedAt ?? new Date(),
      );
  }
  }