import { Spacing, TextField } from 'tosslib';

const formatAmount = (amount: string) => {
  const digits = amount.replace(/[^\d]/g, '');

  if (!digits) return '';
  return Number(digits).toLocaleString('ko-KR');
};

interface AmountInputSectionProps {
  goalAmount: string;
  monthlyAmount: string;
  onGoalAmountChange: (value: string) => void;
  onMonthlyAmountChange: (value: string) => void;
}

function AmountInputSection({
  goalAmount,
  monthlyAmount,
  onGoalAmountChange,
  onMonthlyAmountChange,
}: AmountInputSectionProps) {
  return (
    <>
      <TextField
        label="목표 금액"
        placeholder="목표 금액을 입력하세요"
        suffix="원"
        value={goalAmount}
        onChange={e => onGoalAmountChange(formatAmount(e.target.value))}
      />
      <Spacing size={16} />
      <TextField
        label="월 납입액"
        placeholder="희망 월 납입액을 입력하세요"
        suffix="원"
        value={monthlyAmount}
        onChange={e => onMonthlyAmountChange(formatAmount(e.target.value))}
      />
    </>
  );
}

export default AmountInputSection;
