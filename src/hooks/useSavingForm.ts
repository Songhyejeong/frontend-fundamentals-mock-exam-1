import { useState } from 'react';

interface SavingsState {
    goalAmount: number;
    monthlyAmount: number;
    savingsTerms: number;
    }

export function useSavingsForm() {
  const [state, setState] = useState<SavingsState>({
    goalAmount: 0,
    monthlyAmount: 0,
    savingsTerms: 12,
  });

  const update = (params: Partial<SavingsState>) => {
    setState(prev => ({ ...prev, ...params }));
  };

  return {
    state,
    update,
  };
}
