import Http from '@/helpers/http';

const http = new Http();

export const getSubCategories = async id => {
  try {
    const data = await http.get(`/categories/${id}/subcategories`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSubCategoryDetails = async id => {
  try {
    const data = await http.get(`/subcategories/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsOffSubcate = async subcateId => {
  try {
    const data = await http.get(`/subcategories/${subcateId}/products`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
