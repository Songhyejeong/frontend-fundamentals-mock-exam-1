import SavingsForm from 'components/SavingsForm';
import SavingProductList from 'components/SavingProductList';
import CalculateResult from 'components/CalculateResult';
import NavTab from 'components/NavTab';
import { useState } from 'react';
import { Border, NavigationBar, Spacing } from 'tosslib';
import RecommendProductList from 'components/RecommendProductList';
import { useSavingsForm } from 'hooks/useSavingForm';

export const TABS = {
  PRODUCTS: 'products',
  RESULTS: 'results',
} as const;

export type TabType = (typeof TABS)[keyof typeof TABS];

export function SavingsCalculatorPage() {
  const { state, update } = useSavingsForm();

  const [activeTab, setActiveTab] = useState<TabType>(TABS.PRODUCTS);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  return (
    <>
      <NavigationBar title="적금 계산기" />

      <SavingsForm
        goalAmount={state.goalAmount}
        monthlyAmount={state.monthlyAmount}
        savingsTerms={state.savingsTerms}
        onGoalAmountChange={goalAmount => update({ goalAmount })}
        onMonthlyAmountChange={monthlyAmount => update({ monthlyAmount })}
        onTermChange={savingsTerms => update({ savingsTerms })}
      />
      <Spacing size={24} />
      <Border height={16} />

      <NavTab value={activeTab} onChange={setActiveTab} />

      {activeTab === TABS.PRODUCTS && (
        <SavingProductList
          monthlyAmount={state.monthlyAmount}
          availableTerm={state.savingsTerms}
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
        />
      )}

      {activeTab === TABS.RESULTS && (
        <>
          <CalculateResult
            selectedProductId={selectedProductId}
            monthlyAmount={state.monthlyAmount}
            goalAmount={state.goalAmount}
            term={state.savingsTerms}
          />
          <RecommendProductList selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} />
        </>
      )}
    </>
  );
}

export default SavingsCalculatorPage;
