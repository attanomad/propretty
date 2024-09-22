import { JwtPayload } from './auth/jwt.payload';

declare global {
  namespace Express {
    interface User extends JwtPayload {
      userId: string;
      username: string;
      userRoles: string[];
    }
  }
}
