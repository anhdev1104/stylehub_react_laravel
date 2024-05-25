import Http from '@/helpers/http';
import Cookies from 'js-cookie';

const http = new Http();

export const createAccount = async newAccount => {
  try {
    const data = await http.post('/register', newAccount);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginAccount = async account => {
  try {
    const data = await http.post('/login', account, { withCredentials: true });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const data = await http.get('/profile', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, updateUser) => {
  try {
    const data = await http.post(`/profile/${id}`, updateUser, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutAccount = async () => {
  try {
    const data = await http.post(
      '/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAccounts = async () => {
  try {
    const data = await http.get('/users');
    return data;
  } catch (error) {
    console.log(error);
  }
};
