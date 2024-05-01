import { productsApi } from '../api/products';

export const getProducts = async () => {
  try {
    const { data } = await productsApi();
    return data;
  } catch (error) {
    console.log(error);
  }
};
