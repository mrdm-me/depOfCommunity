import axios from 'axios';

const url = 'http://143.244.135.200:5001';

export const fetchNewsData = async () => {
 
  try {
    const data = await axios.get(url);

    return data;
  } catch (error) {
    return error;
  }
};
