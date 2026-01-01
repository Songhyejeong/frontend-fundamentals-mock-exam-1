import { useSavingsProducts } from 'hooks/query/useSavingProducts';
import { Border, colors, ListRow, Spacing } from 'tosslib';

interface CaculateResultProps {
  selectedProductId: string | null;
  goalAmount: number;
  monthlyAmount: number;
  term: number;
}

function CaculateResult({ selectedProductId, goalAmount, monthlyAmount, term }: CaculateResultProps) {
  const { data: savingProducts } = useSavingsProducts();

  const selectedProduct = savingProducts?.find(product => product.id === selectedProductId);

  if (!selectedProductId || !selectedProduct) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />;
  }

  if (goalAmount == null || goalAmount === 0) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="목표 금액을 입력해주세요." />} />;
  }

  const annualRate = selectedProduct.annualRate;
  const expectedProfit = Math.round(monthlyAmount * term * (1 + annualRate * 0.5));
  const difference = goalAmount - expectedProfit;
  const recommendedMonthly = Math.round(goalAmount / (term * (1 + annualRate * 0.5)) / 1000) * 1000;

  return (
    <>
      <Spacing size={8} />

      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="예상 수익 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${expectedProfit.toLocaleString()}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="목표 금액과의 차이"
            topProps={{ color: colors.grey600 }}
            bottom={`${difference.toLocaleString()}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="추천 월 납입 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${recommendedMonthly.toLocaleString()}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />

      <Spacing size={8} />
      <Border height={16} />
    </>
  );
}

export default CaculateResult;
