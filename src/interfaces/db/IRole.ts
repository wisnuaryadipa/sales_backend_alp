export interface IRole {
    id: string;
    name: string;
    display_name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    sub_role: string;
}