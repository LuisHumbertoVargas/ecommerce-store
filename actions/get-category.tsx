import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const resp = await fetch(`${URL}/${id}`);

  return resp.json();
};

export default getCategory;
