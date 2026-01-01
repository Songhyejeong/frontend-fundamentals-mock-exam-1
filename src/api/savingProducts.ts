import { http, isHttpError } from 'tosslib';
import { UNEXPECTED_ERROR_MESSAGE } from './apiError';

 interface SavingsProduct {
  id: string;
  name: string;
  annualRate: number; 
  minMonthlyAmount: number;
  maxMonthlyAmount: number;
  availableTerms: number; 
}

 type SavingsProductsResponse = SavingsProduct[];

/**
 * 적금 상품 목록을 가져옵니다.
 * @returns 적금 상품 목록 (실패 시 null)
 */
export const fetchSavingsProducts = async (): Promise<SavingsProduct[] | null> => {
  try {
    const products = await http.get<SavingsProductsResponse>('/api/savings-products');
    return products;
  } catch (e) {
    if (isHttpError(e)) {
      console.error(`적금 상품 목록을 불러오는 중 오류가 발생했어요. ${e.message}`);
    } else {
      console.error(UNEXPECTED_ERROR_MESSAGE, e);
    }
    return null;
  }
};
