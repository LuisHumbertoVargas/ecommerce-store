'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useCart from '@/hooks/use-cart';

import MyButton from '@/components/ui/my-button';
import { ShoppingBag } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <ThemeToggle />
      <MyButton
        onClick={() => router.push('/cart')}
        className='flex items-center rounded-full bg-black px-4 py-2'
      >
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-medium text'>
          {cart.items.length}
        </span>
      </MyButton>
    </div>
  );
};

export default NavbarActions;
