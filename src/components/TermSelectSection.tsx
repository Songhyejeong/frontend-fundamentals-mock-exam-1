import { SelectBottomSheet } from 'tosslib';
type TermMonth = 6 | 12 | 24;

interface TermSelectProps {
  value: TermMonth;
  onChange: (value: TermMonth) => void;
  label?: string;
  title?: string;
  options?: readonly TermMonth[];
}

export default function TermSelect({
  value,
  onChange,
  label = '저축 기간',
  title = '저축 기간을 선택해주세요',
  options = [6, 12, 24],
}: TermSelectProps) {
  return (
    <SelectBottomSheet label={label} title={title} value={value} onChange={v => onChange(v as TermMonth)}>
      {options.map(m => (
        <SelectBottomSheet.Option key={m} value={m}>
          {m}개월
        </SelectBottomSheet.Option>
      ))}
    </SelectBottomSheet>
  );
}
