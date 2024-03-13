import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const resp = await fetch(URL);

  return resp.json();
};

export default getCategories;
