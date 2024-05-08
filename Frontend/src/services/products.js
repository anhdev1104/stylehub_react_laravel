import { addProductApi, productsApi } from '../api/products';

export const getProducts = async () => {
  try {
    const { data } = await productsApi();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async newProduct => {
  try {
    const { data } = await addProductApi(newProduct);
    return data;
  } catch (error) {
    console.log(error);
  }
};
