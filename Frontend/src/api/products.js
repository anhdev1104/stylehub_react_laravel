import http from './config';

export const productsApi = () => http.get('/products');
export const productDetailsApi = id => http.get(`/products/${id}`);
export const addProductApi = newProduct =>
  http.post('/products', newProduct, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const updatedProductApi = (id, productUpdate) => http.put(`/products/${id}`, productUpdate);
