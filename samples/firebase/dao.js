import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import { getFirestore, collection,
    addDoc, getDocs, doc,
    updateDoc, deleteDoc,
    serverTimestamp,
    query, orderBy } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyBcGgSJA5ypqV2e5evl8UhBcpUjWlKGm1k",
    authDomain: "icd0007.firebaseapp.com",
    projectId: "icd0007",
    storageBucket: "icd0007.firebasestorage.app",
    messagingSenderId: "275341109675",
    appId: "1:275341109675:web:3809b108d3ecdf38778aee"
};

const COLLECTION_NAME = 'items';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const itemsCollection = collection(db, COLLECTION_NAME);

export async function addItem(name) {
    await addDoc(itemsCollection,
        { name: name, timestamp: serverTimestamp() });
}

export async function deleteItem(id) {
    const itemDoc = doc(db, COLLECTION_NAME, id);
    await deleteDoc(itemDoc);
}

export async function markItemDone(id) {
    const itemDoc = doc(db, COLLECTION_NAME, id);
    await updateDoc(itemDoc, { done: true });
}

export async function fetchItems() {
    const q = query(itemsCollection, orderBy("timestamp", "desc"));

    const results = await getDocs(q);

    return results.docs.map(doc => {
        return {
            id: doc.id,
            name: doc.data().name,
            done: doc.data().done
        };
    });

}
