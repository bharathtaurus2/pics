import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 7f3b6b434e5137e9ca688d7a2c26f1d30043f78079b5fafbbf18fb2ab168450f"
  }
});