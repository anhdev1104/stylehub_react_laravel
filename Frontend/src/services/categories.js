import Http from '@/helpers/http';

const http = new Http();

export const getCategories = async () => {
  try {
    const data = await http.get('/categories');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryDetails = async id => {
  try {
    const data = await http.get(`/categories/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async newCategory => {
  try {
    const data = await http.post('/categories', newCategory);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatedCategory = async (id, newCategory) => {
  try {
    const data = await http.put(`/categories/${id}`, newCategory);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async id => {
  try {
    const data = await http.delete(`/categories/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
