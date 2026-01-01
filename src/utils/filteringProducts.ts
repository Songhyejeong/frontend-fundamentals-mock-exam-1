import { SavingsProduct } from 'type';

export const filterByMonthlyAmount = (products: SavingsProduct[], monthlyAmount: number): SavingsProduct[] => {
  if (!monthlyAmount) return products;

  return products.filter(
    product => monthlyAmount >= product.minMonthlyAmount && monthlyAmount <= product.maxMonthlyAmount
  );
};

export const filterByTerm = (products: SavingsProduct[], availableTerm: number): SavingsProduct[] => {
  if (!availableTerm) return products;

  return products.filter(product => product.availableTerms === availableTerm);
};
