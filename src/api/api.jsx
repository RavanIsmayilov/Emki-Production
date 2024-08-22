import axios from 'axios';


export const fetchPageData = async () => {
  try {
    const response = await axios.get('https://emki-app-c841c0ee2e8c.herokuapp.com/page', {
      params: {
        target: "en"
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchLangData = async () => {
  try {
    const response = await axios.get('https://emki-app-c841c0ee2e8c.herokuapp.com/announcement-translations/{languageId}');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTransData = async () => {
  try {
    const response = await axios.get('https://emki-app-c841c0ee2e8c.herokuapp.com/announcement-translations');
    return response.data;
  } catch (error) {
    throw error;
  }
};
