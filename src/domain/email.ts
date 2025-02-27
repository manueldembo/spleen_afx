export class Email {
    private readonly value: string;
  
    private constructor(email: string) {
      this.value = email;
    }
  
    static create(email: string): Email | Error {
        const instance = new Email(email);
        if (!instance.isValid(email)) {
            return new Error("Invalid email")
        }
    
        return instance
    }
  
    private isValid(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    get getValue(): string {
      return this.value;
    }
  }
  