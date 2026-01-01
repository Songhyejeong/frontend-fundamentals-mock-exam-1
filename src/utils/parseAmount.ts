export const parseAmount = (input: string, maxDigits = 10) => {
  const digits = input.replace(/[^\d]/g, '');

  if (!digits) return 0;

  const limited = digits.slice(0, maxDigits);
  return Number.parseInt(limited, 10);
};
