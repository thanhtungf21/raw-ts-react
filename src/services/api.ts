import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BE_API || "http://localhost:5000",
  withCredentials: true, // Important for cookies to be sent/received
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor for handling authentication errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle authentication errors (401)
    if (error.response && error.response.status === 401) {
      // You could redirect to login or trigger auth-related actions
      console.log("Authentication error");
    }
    return Promise.reject(error);
  }
);

export default api;
