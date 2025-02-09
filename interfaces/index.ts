import { Strategy } from "passport";
import "express-session";

export interface PassportStrategy {
  name: string;
  strategy: Strategy;
}

export interface CustomUser {
  id: number;
  name: string;
  email?: string;
  password?: string;
  admin?: boolean;
}

declare global {
  namespace Express {
    interface User extends CustomUser {}
  }
}

// ??? gpt answer, HOW WROK?
declare module "express-session" {
  interface SessionData {
    messages?: string[];
  }
}
