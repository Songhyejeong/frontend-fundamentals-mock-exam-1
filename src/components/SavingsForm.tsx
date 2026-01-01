import { SelectBottomSheet, Spacing, TextField } from 'tosslib';
import { formatAmount, parseAmount } from 'utils/formatAmount';

interface SavingsFormProps {
  goalAmount: number;
  monthlyAmount: number;
  term: number;
  onGoalAmountChange: (value: number) => void;
  onMonthlyAmountChange: (value: number) => void;
  onTermChange: (value: number) => void;
}

const TERM_OPTIONS = [6, 12, 24];

function SavingsForm({
  goalAmount,
  monthlyAmount,
  term,
  onGoalAmountChange,
  onMonthlyAmountChange,
  onTermChange,
}: SavingsFormProps) {
  return (
    <>
      <Spacing size={16} />
      <TextField
        label="목표 금액"
        placeholder="목표 금액을 입력하세요"
        suffix="원"
        value={formatAmount(goalAmount)}
        onChange={(e) => onGoalAmountChange(parseAmount((e.target.value)))}
      />
      <Spacing size={16} />
      <TextField
        label="월 납입액"
        placeholder="희망 월 납입액을 입력하세요"
        suffix="원"
        value={formatAmount(monthlyAmount)}
        onChange={(e ) =>
          onMonthlyAmountChange((parseAmount((e.target.value))))
        }
      />
      <Spacing size={16} />
      <SelectBottomSheet label="저축 기간" title="저축 기간" value={term} onChange={term => onTermChange(term)}>
        {TERM_OPTIONS.map(m => (
          <SelectBottomSheet.Option key={m} value={m}>
            {m}개월
          </SelectBottomSheet.Option>
        ))}
      </SelectBottomSheet>
    </>
  );
}

export default SavingsForm;
