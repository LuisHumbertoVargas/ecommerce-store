import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const resp = await fetch(`${URL}/${id}`);

  return resp.json();
};

export default getBillboard;
