export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    createdAt?: string;
  }
  
  export interface UserCredential {
    email: string;
    password: string;
  }
  
  export interface RegisterData extends UserCredential {
    name: string;
  }