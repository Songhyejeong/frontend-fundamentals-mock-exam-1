import { http, isHttpError } from 'tosslib';
import { SERVER_ERROR_MESSAGE, UNEXPECTED_ERROR_MESSAGE } from './apiError';

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
      if (e.status >= 500) console.error(SERVER_ERROR_MESSAGE);
    } else {
      console.error(UNEXPECTED_ERROR_MESSAGE, e);
    }
    return null;
  }
};
