import Http from '@/helpers/http';

const http = new Http();

export const getProducts = async () => {
  try {
    const data = await http.get('/products');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetail = async id => {
  try {
    const data = await http.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async newProduct => {
  try {
    const data = await http.post('/products', newProduct, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatedProduct = async (id, productUpdate) => {
  try {
    const data = await http.post(`/products/${id}`, productUpdate, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async id => {
  try {
    const data = await http.delete(`products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
