export interface ICategory{
   id: string;
   name: string
}

export interface IProduct {
   id: string;
   name: string;
   image: string;
};

export interface User {
   username: string;
   role?: string;
   phone?: string;
   email?: string;
};