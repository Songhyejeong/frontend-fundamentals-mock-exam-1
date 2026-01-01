import { TABS, TabType } from 'pages/SavingsCalculatorPage';
import { Spacing, Tab } from 'tosslib';

interface NavTabProps {
  value: TabType;
  onChange: (value: TabType) => void;
}

function NavTab({ value, onChange }: NavTabProps) {
  return (
    <>
      <Spacing size={8} />
      <Tab onChange={(value: string) => onChange(value as TabType)}>
        <Tab.Item value={TABS.PRODUCTS} selected={value === TABS.PRODUCTS}>
          적금 상품
        </Tab.Item>
        <Tab.Item value={TABS.RESULTS} selected={value === TABS.RESULTS}>
          계산 결과
        </Tab.Item>
      </Tab>
    </>
  );
}

export default NavTab;
