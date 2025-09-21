import mongoose, { Document, Schema } from "mongoose"

interface IOrder extends Document {
    customerId: mongoose.Types.ObjectId;
    products: { productId: mongoose.Types.ObjectId; quantity: number }[];
    price: number
    status: "pending" | "shipped" | "canceled"
    createdAt: Date;
}
const orderSchema = new Schema<IOrder>({
    customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    products: [
        {
            productId: { type: Schema.Types.ObjectId, ref: "Product" },
            quantity: Number
        }
    ],
    price: Number,
    status: { type: String, default: "pending" },
    createdAt: { type: Date, default: Date.now }
});
export default mongoose.model<IOrder>("Order", orderSchema);
