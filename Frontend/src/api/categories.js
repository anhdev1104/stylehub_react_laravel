import http from './config';

export const categoriesApi = () => http.get('/categories');
export const categoryDetailsApi = id => http.get(`/categories/${id}`);
export const addCategoryApi = newCategory => http.post(`/categories`, newCategory);
export const updatedCategoryApi = (id, newCategory) => http.put(`/categories/${id}`, newCategory);
export const deleteCategoryApi = id => http.delete(`categories/${id}`);
