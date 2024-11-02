export class DiscountService {
    /**
     * Aplica un descuento al precio base.
     * @param basePrice Precio original del ticket.
     * @param discountPercentage Porcentaje de descuento a aplicar.
     * @returns Precio final después de aplicar el descuento.
     */
    public applyDiscount(basePrice: number, discountPercentage: number): number {
        if (discountPercentage <= 0 || discountPercentage > 100) {
            throw new Error("Porcentaje de descuento no válido");
        }
        const discountAmount = (basePrice * discountPercentage) / 100;
        return basePrice - discountAmount;
    }

    // /**
    //  * Calcula el monto del descuento.
    //  * @param discountPercentage Porcentaje de descuento.
    //  * @returns Monto de descuento en base a un porcentaje.
    //  */
    // public calculateDiscount(discountPercentage: number): number {
    //     if (discountPercentage <= 0 || discountPercentage > 100) {
    //         throw new Error("Porcentaje de descuento no válido");
    //     }
    //     return discountPercentage;
    // }
}
