import { Spacing, Tab } from 'tosslib';

interface NavTabProps {
  value: string;
  onChange: (value: string) => void;
}

function NavTab({ value, onChange }: NavTabProps) {
  return (
    <>
      <Spacing size={8} />
      <Tab onChange={value => onChange(value)}>
        <Tab.Item value="products" selected={value === 'products'}>
          적금 상품
        </Tab.Item>
        <Tab.Item value="results" selected={value === 'results'}>
          계산 결과
        </Tab.Item>
      </Tab>
    </>
  );
}

export default NavTab;
