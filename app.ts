import express from "express";
import cors from "cors";
import customerRoutes from "./routes/customerRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import shipmentRoutes from "./routes/shipmentRoutes";

const app = express();
app.use(cors());
app.use(express.json());


app.use("/customers", customerRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/shipments", shipmentRoutes);

export default app;
