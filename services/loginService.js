import axios from 'axios'



const loginService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${process.env.API_BASE_URL}/auth/login`, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default loginService;
