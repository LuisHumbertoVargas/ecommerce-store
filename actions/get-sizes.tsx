import { Size } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const resp = await fetch(URL);

  return resp.json();
};

export default getSizes;
