export class LoanEntity {
    constructor(
      public readonly id: string,              
      public readonly description: string,
      public readonly returnDate: Date,      
      public readonly status: boolean = false,
      public readonly studentId: string,      
      public readonly userId: string,         
      public readonly createdAt: Date = new Date(),
      public readonly updatedAt: Date = new Date()
    ) {}
  

    
    public isOverdue(): boolean {
      return !this.status && new Date() > this.returnDate;
    }
  
    public canBeCompleted(): boolean {
      return !this.status;
    }
  
    public completeLoan(): LoanEntity {
      if (!this.canBeCompleted()) {
        throw new Error("El préstamo ya está completado o vencido");
      }
      
      return new LoanEntity(
        this.id,
        this.description,
        this.returnDate,
        true,         
        this.studentId,
        this.userId,
        this.createdAt,
        new Date()     
      );
    }
  
    public static toLoanEntity(id:string="",description: string,returnDate: Date,studentId: string,userId: string): LoanEntity {
      return new LoanEntity(id,description,returnDate,false,studentId,userId);
    }
  }