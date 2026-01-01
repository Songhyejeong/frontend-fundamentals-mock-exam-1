import { Tab } from 'tosslib';

export type TabKey = 'products' | 'results';

interface NavTabProps {
  value: TabKey;
  onChange: (value: TabKey) => void;
}

function NavTab({ value, onChange }: NavTabProps) {
  return (
    <Tab onChange={(v: any) => onChange(v)}>
      <Tab.Item value="products" selected={value === 'products'}>
        적금 상품
      </Tab.Item>
      <Tab.Item value="results" selected={value === 'results'}>
        계산 결과
      </Tab.Item>
    </Tab>
  );
}

export default NavTab;
