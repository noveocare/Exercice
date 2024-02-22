// import axios from 'axios';
export const debugService = async () => {
  try {
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL + "/heartbeat").then(res => res.text());
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

 
/* const debugService = async () => {
  try {
    debugger
    const response = await axios.get("http://192.168.201.40:8085/heartbeat");
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
  }
}; */