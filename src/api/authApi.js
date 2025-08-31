import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const registerUser = async ({ username, email, password }) => {
  try {
    const { data } = await axios.post(`${apiUrl}/auth/register`, {
      username,
      email,
      password,
    });

    return data.data.access_token;
  } catch (error) {
    console.error("Register Error:", error?.response?.data || error.message);
    throw error.response?.data?.message || "Registration failed";
  }

  // return data.access_token
};

const loginUser = async ({ email, password }) => {
  console.log(apiUrl);
  try {
    const { data } = await axios.post(`${apiUrl}/auth/login`, {
      email,
      password,
    });

    return data.data.access_token;
  } catch (error) {
    console.error("Login error", error?.response?.data || error.message);
    throw error.response?.data?.message || "Login Failed";
  }
};

export { registerUser, loginUser };
