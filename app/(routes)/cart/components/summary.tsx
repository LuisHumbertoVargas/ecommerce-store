'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import MyButton from '@/components/ui/my-button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';

import toast from 'react-hot-toast';

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const onCheckout = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );

      window.location = response.data.url;
    } catch (error) {
      console.error(error);
      setError('An error occurred during checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-grat-200 pt-4'>
          <div className='text-base font-medium text-green-700'>
            Order Total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <MyButton
        onClick={onCheckout}
        className='w-full mt-6'
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Checkout'}
      </MyButton>
      {error !== '' && (
        <div className='p-4 text-center text-red-400'>*{error}</div>
      )}
    </div>
  );
};

export default Summary;
