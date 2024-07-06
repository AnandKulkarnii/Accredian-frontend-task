import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const createReferral = async (referralData) => {
  try {
    const response = await axios.post(`${API_URL}/referrals`, referralData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
