import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://deserts-store.b.goit.study/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDesserts = async (params = {}) => {
  const response = await instance.get('/desserts', {
    params,
  });

  return response.data;
};

export const getDessertsById = async id => {
  const response = await instance.get(`/desserts/${id}`);

  return response.data;
};

export const getCategories = async () => {
  const response = await instance.get('/categories');

  return response.data;
};

export const getFeedback = async (params = {}) => {
  const response = await instance.get('/feedbacks', {
    params,
  });

  return response.data;
};

export const orderDessert = async product => {
  const response = await instance.post('/orders', product);

  return response.data;
};
