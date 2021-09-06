import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID vjHK321WzvnXYRCrrOXckb19UnNn9yrVJ7qyjHq8oH0',
  },
});