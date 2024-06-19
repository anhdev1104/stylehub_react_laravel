import Http from '@/helpers/http';

const http = new Http();

export const getProducts = async (page = '', limit = '', search = '') => {
  try {
    const data = await http.get(`/products?${page && `page=${page}`}&search=${search}&limit=${limit}`);
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

export const getProductsOnCategory = async (id, page = '', limit = '', filter = '') => {
  try {
    const data = await http.get(`/categories/${id}/products?page=${page}&limit=${limit}&filter=${filter}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductType = async type => {
  try {
    const data = await http.get(`/${type}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductRandom = async (limit = '') => {
  try {
    const data = await http.get(`/random-products?limit=${limit}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
