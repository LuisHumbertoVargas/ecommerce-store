'use client';

import ButtonBag from '@/components/ui/button-bag';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <ButtonBag className='flex items-center rounded-full bg-black px-4 py-2'>
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-medium text'>0</span>
      </ButtonBag>
    </div>
  );
};

export default NavbarActions;
