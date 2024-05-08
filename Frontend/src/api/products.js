import http from './config';

export const productsApi = () => http.get('/products');
export const addProductApi = newProduct =>
  http.post('/products', newProduct, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
