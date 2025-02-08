import { Strategy } from "passport";

export interface PassportStrategy {
  name: string;
  strategy: Strategy;
}

export interface CustomUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

declare global {
  namespace Express {
    interface User extends CustomUser {}
  }
}
