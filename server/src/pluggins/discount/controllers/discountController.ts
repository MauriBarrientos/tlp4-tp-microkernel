import { Request, Response } from "express";
import { DiscountService } from "../services/discountService";

const discountService = new DiscountService();

export class DiscountController {
    public applyDiscount(req: Request, res: Response): void {
        try {
            const basePrice = parseFloat(req.body.basePrice);
            const discountPercentage = parseFloat(req.body.discountPercentage);

            if (isNaN(basePrice) || isNaN(discountPercentage)) {
                res.status(400).json({ message: "Parámetros inválidos" });
                return;
            }

            const finalPrice = discountService.applyDiscount(basePrice, discountPercentage);
            res.status(200).json({ finalPrice });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Error desconocido" });
            }
        }
    }
}
