import ErrorLayout from '_common/ErrorLayout';
import Loading from '_common/Loading';
import { useSavingsProducts } from 'hooks/query/useSavingProducts';
import React from 'react';
import { Assets, colors, ListRow } from 'tosslib';
import { filterByMonthlyAmount, filterByTerm } from 'utils/filteringProducts';

interface SavingProductListProps {
  monthlyAmount: number;
  availableTerm: number;
  selectedProductId: string | null;
  setSelectedProductId: React.Dispatch<React.SetStateAction<string | null>>;
}

function SavingProductList({
  monthlyAmount,
  availableTerm,
  selectedProductId,
  setSelectedProductId,
}: SavingProductListProps) {
  const { data: savingProducts, isLoading } = useSavingsProducts();

  if (isLoading) {
    return <Loading message="적금 상품을 불러오는 중이에요" />;
  }

  if (!savingProducts || savingProducts.length === 0) {
    return <ErrorLayout message="적금 상품을 불러올 수 없어요." />;
  }

  const filteredProductList = filterByTerm(filterByMonthlyAmount(savingProducts, monthlyAmount), availableTerm).sort(
    (a, b) => b.annualRate - a.annualRate
  );

  if (filteredProductList.length === 0) {
    return <ErrorLayout message="조건에 맞는 적금 상품이 없어요." description="다른 조건으로 다시 시도해 주세요." />;
  }

  const handleClickProduct = (productId: string) => {
    if (selectedProductId === productId) {
      setSelectedProductId(null);
    } else {
      setSelectedProductId(productId);
    }
  };

  return (
    <>
      {filteredProductList.map(product => (
        <ListRow
          key={product.id}
          contents={
            <ListRow.Texts
              type="3RowTypeA"
              top={product.name}
              topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
              middle={`연 이자율: ${product.annualRate}%`}
              middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
              bottom={`${product.minMonthlyAmount.toLocaleString()}원 ~ ${product.maxMonthlyAmount.toLocaleString()}원 | ${product.availableTerms}개월`}
              bottomProps={{ fontSize: 13, color: colors.grey600 }}
            />
          }
          right={selectedProductId === product.id && <Assets.Icon name="icon-check-circle-green" />}
          onClick={() => {
            handleClickProduct(product.id);
          }}
        />
      ))}
    </>
  );
}
export default SavingProductList;
