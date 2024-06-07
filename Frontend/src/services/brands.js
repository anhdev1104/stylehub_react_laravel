import Http from '@/helpers/http';

const http = new Http();

export const getBrands = async () => {
  try {
    const data = await http.get('/brands');
    return data;
  } catch (error) {
    console.log(error);
  }
};
