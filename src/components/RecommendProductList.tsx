import { useSavingsProducts } from 'hooks/query/useSavingProducts';
import { colors, ListHeader, ListRow, Spacing } from 'tosslib';

interface RecommendProductListProps {
  selectedProductId: string | null;
  setSelectedProductId: React.Dispatch<React.SetStateAction<string | null>>;
}

function RecommendProductList({ selectedProductId, setSelectedProductId }: RecommendProductListProps) {
  const { data: savingProducts } = useSavingsProducts();

  const filteredRecommendProducts = savingProducts?.sort((a, b) => b.annualRate - a.annualRate).slice(0, 3);

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

      {filteredRecommendProducts?.map(product => (
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
