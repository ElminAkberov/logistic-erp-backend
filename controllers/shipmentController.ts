import { Request, Response } from "express";
import Shipment from "../models/Shipment";

export const getShipments = async (req: Request, res: Response) => {
  const shipments = await Shipment.find().populate("orderId");
  res.json(shipments);
};

export const getShipmentById = async (req: Request, res: Response) => {
  const shipment = await Shipment.findById(req.params.id).populate("orderId");
  res.json(shipment);
};

export const createShipment = async (req: Request, res: Response) => {
  const newShipment = new Shipment(req.body);
  await newShipment.save();
  res.status(201).json(newShipment);
};

export const updateShipment = async (req: Request, res: Response) => {
  const updated = await Shipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteShipment = async (req: Request, res: Response) => {
  await Shipment.findByIdAndDelete(req.params.id);
  res.json({ message: "Shipment deleted" });
};
