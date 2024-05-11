import { subcategoriesApi, subcategoryDetailsApi } from '../api/subcategories';

export const getSubCategories = async id => {
  try {
    const { data } = await subcategoriesApi(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSubCategoryDetails = async id => {
  try {
    const { data } = await subcategoryDetailsApi(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
