export interface IUserAccountServices {
  CreateUser: (args: { name: string; email: string; password: string; }) => {
    result: string;
  };
  getUserByEmail: (args: { email: string; }) => {
    email: string;
    name: string;
    password: string;
  };
}