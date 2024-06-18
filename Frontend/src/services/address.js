import axios from 'axios';

export const getProvince = async () => {
  try {
    const data = await axios.get('https://esgoo.net/api-tinhthanh/1/0.htm');
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDistrict = async id => {
  try {
    const data = await axios.get(`https://esgoo.net/api-tinhthanh/2/${id}.htm`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWards = async id => {
  try {
    const data = await axios.get(`https://esgoo.net/api-tinhthanh/3/${id}.htm`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
