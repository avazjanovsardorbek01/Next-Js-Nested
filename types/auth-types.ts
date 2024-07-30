export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp extends SignIn {
  first_name: string;
  last_name: string;
  gender: string;
}
