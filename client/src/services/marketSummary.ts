import axios from 'axios';

export const authRequest =  async <T>(endpoint: string, authToken: string) => {
  const res = await axios.get<T>(`http://localhost:5000/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res.data;
};
