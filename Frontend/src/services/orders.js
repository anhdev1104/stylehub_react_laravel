import Http from '@/helpers/http';

const http = new Http();

export const getOrders = async () => {
  try {
    const data = await http.get('/orders');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addOrders = async newOrders => {
  try {
    const data = await http.post('/orders', newOrders);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderDetails = async id => {
  try {
    const data = await http.get(`/orders/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
