import * as db from "./database";
import { IUserAccountServices } from "./interface";

class UserAccountServices implements IUserAccountServices {
  CreateUser = (args: { name: string; email: string; password: string; }): { result: string; } => {
    const { name, email, password } = args;
    const createdUser = db.addUser(name, email, password);
    return {
      result: createdUser
    };
  };

  getUserByEmail = (args: { email: string; }): { email: string; name: string; password: string; } => {
    const { email } = args;
    const createdUser = db.getUserByEmail(email);
    return createdUser;
  };
}

const userAccountServices = new UserAccountServices();
export default userAccountServices;