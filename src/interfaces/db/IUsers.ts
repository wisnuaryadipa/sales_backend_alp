
export interface IUsers {
    id: number;
    name: string;
    email: string;
    password: string;
    remember_token: string;
    created_at: Date;
    updated_at: Date;
    role_id: number;
    uuid: string;
}