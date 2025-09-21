import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
    name: string;
    price: number;
    sku: string;
    stock: number;
    category: string;
}

const productSchema = new Schema<IProduct>({
    name: String,
    price: Number,
    sku: String,
    stock: Number,
    category: String
});

export default mongoose.model<IProduct>("Product", productSchema);
