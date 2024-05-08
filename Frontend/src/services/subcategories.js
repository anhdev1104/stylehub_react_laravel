import { subcategoriesApi } from '../api/subcategories';

export const getSubCategories = async id => {
  try {
    const { data } = await subcategoriesApi(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
