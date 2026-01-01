export const formatAmount = (amount: number) => {
  const digits = amount.toString().replace(/[^\d]/g, '');

  if (!digits) return '';
  return Number(digits).toLocaleString('ko-KR');
};

export const parseAmount = (input: number) => {
  const digits = input.toString().replace(/[^\d]/g, '');
  if (!digits) return 0;
  return Number.parseInt(digits, 10) || 0;
};
