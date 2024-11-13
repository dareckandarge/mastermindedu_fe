import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

// this file manages (sends) backend requests
export const getHelloMessage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hello`);
    return response.data;
  } catch (error) {
    console.error("Error fetching message", error);
    throw error;
  }
};
