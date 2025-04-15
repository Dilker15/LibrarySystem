


export class PersonalizeErrors extends Error{

        public statusCode:number;

        constructor(message:string,status:number){
            super(message);
            this.statusCode=status;
            this.name='PersonalizeErrors';
        }

        static badRequest(message:string):PersonalizeErrors{
            return new PersonalizeErrors(message,400);
        }

        static unauthorize(message:string):PersonalizeErrors{
            return new PersonalizeErrors(message,401);
        }

        static notFound(message:string):PersonalizeErrors{
            return new PersonalizeErrors(message,404);
        }

        static internalError(message:string):PersonalizeErrors{
            return new PersonalizeErrors(message,500);
        }

}