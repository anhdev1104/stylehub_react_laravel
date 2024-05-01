import http from './config';

export const categoriesApi = () => http.get('/categories');
