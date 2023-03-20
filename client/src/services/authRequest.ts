import axios from 'axios';


export const authRequest =  async <T>(endpoint: string, authToken: string) => {
  const port = String(process.env.SERVER_PORT);
  const res = await axios.get<T>(`http://localhost:${port}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res.data;
};
