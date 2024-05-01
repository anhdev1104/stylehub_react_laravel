import { categoriesApi } from '../api/categories';

export const getCategories = async () => {
  try {
    const { data } = await categoriesApi();
    return data;
  } catch (error) {
    console.log(error);
  }
};
