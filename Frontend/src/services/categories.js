import {
  addCategoryApi,
  categoriesApi,
  categoryDetailsApi,
  deleteCategoryApi,
  updatedCategoryApi,
} from '../api/categories';

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

export const addCategory = async newCategory => {
  try {
    const { data } = await addCategoryApi(newCategory);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatedCategory = async (id, newCategory) => {
  try {
    const { data } = await updatedCategoryApi(id, newCategory);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async id => {
  try {
    const { data } = await deleteCategoryApi(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
