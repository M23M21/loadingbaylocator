const { firestore } = require('../services/firebase'); 
const { collection, addDoc } = require('firebase/firestore');
const data = require('./data.json'); 

const uploadDataToFirestore = async (collectionName, data) => {
  try {
    const collectionRef = collection(firestore, collectionName);

    for (const item of data) {
   
      const itemWithLowerCase = {
        ...item,
        nameLower: item.name.toLowerCase(),  
        townLower: item.town.toLowerCase(), 
      };

      await addDoc(collectionRef, itemWithLowerCase);
      console.log(`Added document: ${item.name}`);
    }

    console.log('All data uploaded successfully.');
  } catch (error) {
    console.error('Error uploading data:', error);
  }
};

uploadDataToFirestore('loadingBays', data); 