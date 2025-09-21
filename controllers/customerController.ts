import { Request, Response } from "express";
import Customer from "../models/Customer";
import Order from "../models/Order";

export const getCustomers = async (req: Request, res: Response) => {
  const customers = await Customer.find();
  res.json(customers);
};

export const getCustomerById = async (req: Request, res: Response) => {
  const customer = await Customer.findById(req.params.id);
  const orders = await Order.find({ customerId: req.params.id });
  res.json({ customer, orders });
};

export const createCustomer = async (req: Request, res: Response) => {
  const newCustomer = new Customer(req.body);
  await newCustomer.save();
  res.status(201).json(newCustomer);
};

export const deleteCustomer = async (req: Request, res: Response) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Customer deleted" });
};
