import { categoriesApi, categoryDetailsApi } from '../api/categories';

export const getCategories = async () => {
  try {
    const { data } = await categoriesApi();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryDetails = async id => {
  try {
    const { data } = await categoryDetailsApi(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
