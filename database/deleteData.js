const { firestore } = require('../services/firebase');
const { collection, getDocs, deleteDoc } = require('firebase/firestore');

const deleteAllDocuments = async (collectionName) => {
  try {
    const collectionRef = collection(firestore, collectionName);
    const querySnapshot = await getDocs(collectionRef);

    const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);

    console.log('Toate documentele au fost șterse cu succes.');
  } catch (error) {
    console.error('Eroare la ștergerea documentelor:', error);
  }
};

deleteAllDocuments('loadingBays'); 