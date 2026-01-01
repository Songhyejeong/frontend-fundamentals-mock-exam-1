import SavingsForm from 'components/SavingsForm';
import SavingProductList from 'components/SavingProductList';
import CaculateResult from 'components/CaculateResult';
import NavTab, { TabKey } from 'components/NavTab';
import { useState } from 'react';
import { Border, NavigationBar, Spacing } from 'tosslib';
import RecommendProductList from 'components/RecommendProductList';

export function SavingsCalculatorPage() {
  const [term, setTerm] = useState(12);
  const [goalAmount, setGoalAmount] = useState(0);
  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const [activeTab, setActiveTab] = useState<TabKey>('products');

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  return (
    <>
      <NavigationBar title="적금 계산기" />
      <Spacing size={16} />

      <SavingsForm
        goalAmount={goalAmount}
        monthlyAmount={monthlyAmount}
        term={term}
        onGoalAmountChange={setGoalAmount}
        onMonthlyAmountChange={setMonthlyAmount}
        onTermChange={setTerm}
      />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />
      <NavTab value={activeTab} onChange={setActiveTab} />

      {activeTab === 'products' && (
        <SavingProductList
          monthlyAmount={monthlyAmount}
          availableTerm={term}
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
        />
      )}

      {activeTab === 'results' && (
        <CaculateResult
          selectedProductId={selectedProductId}
          monthlyAmount={monthlyAmount}
          goalAmount={goalAmount}
          term={term}
        />
      )}

      <RecommendProductList selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} />
    </>
  );
}
