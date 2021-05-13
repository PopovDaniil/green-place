export class RegisterUserDto {
  name: string;
  age: number;
  email: string;
  telephone: number;
  login: string;
  password: string;
}

export class RegisterUserResponse {
  token: string;
  login: string;
  email: string;
  telephone: number;
}
