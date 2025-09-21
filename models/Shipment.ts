import mongoose, { Document, Schema } from "mongoose";

export interface IShipment extends Document {
    orderId: mongoose.Types.ObjectId;
    carrier: string;
    status: string;
    createdAt: Date;
    estimatedDelivery: Date

}

const shipmentSchema = new Schema<IShipment>({
    orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true, unique: true },
    carrier: { type: String, required: true },
    status: { type: String, enum: ["In Transit", "Delivered", "Pending Pickup"], default: "Pending Pickup" },
    estimatedDelivery: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.model<IShipment>("Shipment", shipmentSchema);
