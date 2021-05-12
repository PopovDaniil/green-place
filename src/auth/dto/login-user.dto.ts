export class LoginUserDto {
  login: string;
  password: string;
}

export class LoginUserResponse {
  token?: string;
  success: boolean;
}
