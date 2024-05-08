import http from './config';

export const subcategoriesApi = id => http.get(`/categories/${id}/subcategories`);
