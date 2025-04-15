export class DetailLoanEntity {
    constructor(
      public readonly id: string,         
      public readonly loanId: string,     
      public readonly bookId: string,    
      public readonly status: boolean = false,
      public readonly createdAt: Date = new Date(),
      public readonly updatedAt: Date = new Date()
    ) {}
  
   
    public isDelivered(): boolean {
      return this.status;
    }
  
    public canBeReturned(): boolean {
      return !this.status; 
    }
  
    public markAsReturned(): DetailLoanEntity {
      return new DetailLoanEntity(this.id,this.loanId, this.bookId,true,this.createdAt,new Date());
    }


    static toDatailLoanEntity(id:string="",loan_id:string,book_id:string,status:boolean=false,created_on:Date=new Date(),updated_on:Date=new Date()):DetailLoanEntity{
        return new DetailLoanEntity(id,loan_id,book_id,status,created_on,updated_on);
    }
  }