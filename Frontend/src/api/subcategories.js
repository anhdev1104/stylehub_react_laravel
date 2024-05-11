import http from './config';

export const subcategoriesApi = id => http.get(`/categories/${id}/subcategories`);
export const subcategoryDetailsApi = id => http.get(`/subcategories/${id}`);
