import mongoose, { Document, Schema } from "mongoose";

export interface IShipment extends Document {
    orderId: mongoose.Types.ObjectId;
    carrier: string;
    status: string;
    createdAt: Date;
    estimatedDelivery: Date

}

const shipmentSchema = new Schema<IShipment>({
    orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    carrier: String,
    status: { type: String, default: "In Transit" },
    createdAt: { type: Date, default: Date.now },
    estimatedDelivery: { type: Date, required: true }
});

export default mongoose.model<IShipment>("Shipment", shipmentSchema);
