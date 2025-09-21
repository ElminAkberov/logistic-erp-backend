import { Request, Response } from "express";
import Product from "../models/Product";

export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.find();
    for (const item of products) {
        if (item.stock == 0) return await Product.findByIdAndDelete(item.id)
    }
    res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
};

export const updateProduct = async (req: Request, res: Response) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

export const deleteProduct = async (req: Request, res: Response) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
};
