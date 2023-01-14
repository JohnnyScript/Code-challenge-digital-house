import axios from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const get = async ({url, headers = {}}: any) => {
  const response = await axios.get(url, {
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  });
  return response.data;
};
