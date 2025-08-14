import axios from "axios";

export const authClient = axios.create({
  baseURL: import.meta.env.BUN_PUBLIC_API_URL ?? "https://api.example.com",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});
