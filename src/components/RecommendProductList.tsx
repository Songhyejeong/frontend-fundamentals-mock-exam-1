import ErrorLayout from '_common/ErrorLayout';
import Loading from '_common/Loading';
import { useSavingsProducts } from 'hooks/query/useSavingProducts';
import { colors, ListHeader, ListRow, Spacing } from 'tosslib';

interface RecommendProductListProps {
  selectedProductId: string | null;
  setSelectedProductId: React.Dispatch<React.SetStateAction<string | null>>;
}

function RecommendProductList({ selectedProductId, setSelectedProductId }: RecommendProductListProps) {
  const { data: savingProducts, isLoading } = useSavingsProducts();

  if (isLoading) {
    return <Loading message="추천 적금 상품을 불러오는 중이에요" />;
  }

  if (!savingProducts || savingProducts.length === 0) {
    return <ErrorLayout message="적금 상품을 불러올 수 없어요." />;
  }

  const recommendProducts = savingProducts?.sort((a, b) => b.annualRate - a.annualRate).slice(0, 3);

  const handleClickProduct = (productId: string) => {
    if (selectedProductId === productId) {
      setSelectedProductId(null);
    } else {
      setSelectedProductId(productId);
    }
  };

  return (
    <>
      <Spacing size={8} />

      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

      {recommendProducts.map(product => (
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
          onClick={() => {
            handleClickProduct(product.id);
          }}
        />
      ))}

      <Spacing size={40} />
    </>
  );
}

export default RecommendProductList;
