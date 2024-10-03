import {Category} from "./category.ts";

export interface Product {
    id: string;
    title: string;
    price: string;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: Category;
    favorite: boolean;
}