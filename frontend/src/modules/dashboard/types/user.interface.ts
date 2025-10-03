export interface UserResponse {
    data: User[];
}

export interface User {
    id:        string;
    name:    string;
    email:     string;
    rol:       string;
    active:    boolean;
    createdAt: Date;
    updatedAt: Date;
}