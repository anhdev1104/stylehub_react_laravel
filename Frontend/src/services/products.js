import { addProductApi, deleteProductApi, productDetailsApi, productsApi, updatedProductApi } from '../api/products';

export const getProducts = async () => {
  try {
    const { data } = await productsApi();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetail = async id => {
  try {
    const { data } = await productDetailsApi(id);
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

export const updatedProduct = async (id, productUpdate) => {
  try {
    const { data } = await updatedProductApi(id, productUpdate);
    return data;
  } catch (error) {
    console.log();
  }
};

export const deleteProduct = async id => {
  try {
    const { data } = await deleteProductApi(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
