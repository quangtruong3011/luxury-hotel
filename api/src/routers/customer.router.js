import { Router } from "express";
import customerController from "../controllers/customer.controller.js";

const customerRouter = Router();

customerRouter.get("/", customerController.getCustomers);
customerRouter.get("/:customerId", customerController.getCustomer);
customerRouter.post("/", customerController.createCustomer);
customerRouter.put("/:customerId", customerController.updateCustomer);
customerRouter.delete("/:customerId", customerController.deleteCustomer);

export default customerRouter;