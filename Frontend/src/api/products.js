import http from './config';

export const productsApi = () => http.get('/products');
