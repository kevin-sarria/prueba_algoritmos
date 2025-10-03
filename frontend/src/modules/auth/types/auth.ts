export interface LoginResponse {
    token: string;
}

export interface RegisterResponse {
    token: string;
}

export interface TokenDecodeInformation {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface JwtPayloadWithExp extends TokenDecodeInformation {
  exp: number;
}