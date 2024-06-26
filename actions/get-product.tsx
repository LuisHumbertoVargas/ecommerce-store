import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const resp = await fetch(`${URL}/${id}`);

  return resp.json();
};

export default getProduct;
