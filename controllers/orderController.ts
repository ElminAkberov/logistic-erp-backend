import { Request, Response } from "express";
import Order from "../models/Order";
import Product from "../models/Product";

export const getOrders = async (req: Request, res: Response) => {
  const { status, customerId } = req.query;
  const filter: any = {};
  if (status) filter.status = status;
  if (customerId) filter.customerId = customerId;
  const orders = await Order.find(filter).populate("customerId").populate("products.productId");
  res.json(orders);
};

export const createOrder = async (req: Request, res: Response) => {
  const { products } = req.body
  for (const item of products) {
    const prod = await Product.findById(item.productId)
    if (!prod) return res.status(404).json({ message: "Product not found" });
    if (item.quantity > prod?.stock) return res.status(404).json({ message: `Not enough stock for ${prod.name}` })
  }

  const newOrder = new Order(req.body);
  await newOrder.save();

  for (const item of products) {
    await Product.findByIdAndUpdate(item.productId, { $inc: { stock: -item.quantity } })
  }

  res.status(201).json(newOrder);
};

export const updateOrder = async (req: Request, res: Response) => {
  const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteOrder = async (req: Request, res: Response) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
};
