const API_KEY = 'UA8B0OUR'; // Înlocuiește cu cheia ta What3Words
const BASE_URL = 'https://api.what3words.com/v3';

// Funcție pentru convertirea unei adrese What3Words în coordonate (lat, lng)
export const convertToCoordinates = async (words) => {
  try {
    console.log('What3Words received:', words);

    const sanitizedWords = words.trim().toLowerCase().replace(/\s+/g, '.');

    if (!/^([a-z]+\.){2}[a-z]+$/.test(sanitizedWords)) {
      console.error('Error: Invalid What3Words format:', sanitizedWords);
      return null;
    }

    const response = await fetch(`${BASE_URL}/convert-to-coordinates?words=${sanitizedWords}&key=${API_KEY}`);
    const data = await response.json();

    if (data.coordinates) {
      return {
        lat: data.coordinates.lat,
        lng: data.coordinates.lng,
      };
    }

    console.error('Error:', data.error ? data.error.message : 'Unknown error');
    return null;
  } catch (error) {
    console.error('Error converting to coordinates:', error);
    return null;
  }
};

// Funcție pentru convertirea coordonatelor (lat, lng) în What3Words
export const convertToWords = async (lat, lng) => {
  try {
    const response = await fetch(`${BASE_URL}/convert-to-3wa?coordinates=${lat},${lng}&key=${API_KEY}`);
    const data = await response.json();

    // Dacă API-ul returnează cuvintele, le returnăm
    if (data.words) {
      return data.words;
    }

    // Tratarea erorilor din API
    console.error('Error:', data.error ? data.error.message : 'Unknown error');
    return null;
  } catch (error) {
    console.error('Error converting to words:', error);
    return null;
  }
};