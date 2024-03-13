'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted: false;
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className='font-semibold'>{formatter.format(Number(value))}</div>;
};

export default Currency;