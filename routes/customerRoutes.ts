import { Router } from "express";
import { getCustomers, getCustomerById, createCustomer, deleteCustomer } from "../controllers/customerController";

const router = Router();

router.get("/", getCustomers);
router.get("/:id", getCustomerById);
router.post("/", createCustomer);
router.delete("/:id", deleteCustomer);

export default router;
