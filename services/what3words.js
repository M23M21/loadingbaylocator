const API_KEY = 'TO0J916D';
const BASE_URL = 'https://api.what3words.com/v3';

export const convertToCoordinates = async (words) => {
  try {
    const response = await fetch(`${BASE_URL}/convert-to-coordinates?words=${words}&key=${API_KEY}`);
    const data = await response.json();
    if (data.coordinates) {
      return {
        lat: data.coordinates.lat,
        lng: data.coordinates.lng,
      };
    }
    return null;
  } catch (error) {
    console.error('Error converting to coordinates:', error);
    return null;
  }
};

export const convertToWords = async (lat, lng) => {
  try {
    const response = await fetch(`${BASE_URL}/convert-to-3wa?coordinates=${lat},${lng}&key=${API_KEY}`);
    const data = await response.json();
    if (data.words) {
      return data.words;
    }
    return null;
  } catch (error) {
    console.error('Error converting to words:', error);
    return null;
  }
};
