import * as mongodb from "mongodb";

export interface Product {
   name: string;
   _id?: mongodb.ObjectId;
}