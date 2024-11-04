// src/plugins/discount/services/discountService.ts

export class DiscountService {
    public applyDiscount(basePrice: number, discountPercentage: number): number {
      if (discountPercentage <= 0 || discountPercentage > 100) {
        throw new Error("Porcentaje de descuento no válido");
      }
  
      const discountAmount = (basePrice * discountPercentage) / 100;
      return basePrice - discountAmount;
    }
  }
  