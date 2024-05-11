import http from './config';

export const categoriesApi = () => http.get('/categories');
export const categoryDetailsApi = id => http.get(`/categories/${id}`);
