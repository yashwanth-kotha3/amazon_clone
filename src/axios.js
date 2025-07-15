import axios from "axios";

const instance = axios.create({
  baseURL: "https://stripe-server-s9pz.onrender.com", // ✅ EXACTLY this (no slash at end)
});

export default instance;
