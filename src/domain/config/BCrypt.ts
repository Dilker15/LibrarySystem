import bcrypt from 'bcrypt'

export class BCrypt{

        static async hashPassword(password:string):Promise<string>{
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password,salt);
            return hash;
        }

        static async comparePassword(currentPassword:string,hashedPassword:string):Promise<boolean>{
             const result = await bcrypt.compare(currentPassword,hashedPassword);
             return result;
        }
}