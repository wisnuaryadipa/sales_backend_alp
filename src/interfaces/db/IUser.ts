
export interface IUser {
    (id: string): Promise<number>
    (name: number): Promise<number>
    email: string
    remember_token: string
    createdAt: Date
    updatedAt: Date
    role_id: number
    uuid: string
}