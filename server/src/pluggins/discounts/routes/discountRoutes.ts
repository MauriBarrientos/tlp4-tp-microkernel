import { Router } from "express";
import { DiscountController } from "../controllers/discountController";

const discountController = new DiscountController();
const discountRouter = Router();

discountRouter.post("/apply-discount", discountController.applyDiscount);

export default discountRouter;