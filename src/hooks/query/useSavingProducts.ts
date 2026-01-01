import { useQuery } from '@tanstack/react-query';
import { fetchSavingsProducts } from 'api/savingProducts';

/**
 * 적금 상품 목록을 가져오는 훅입니다.
 * GET /api/savings-products
 */
export const useSavingsProducts = () => {
  return useQuery({
    queryKey: ['savingsProducts'],
    queryFn: fetchSavingsProducts,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
    retry: 1,
  });
};
