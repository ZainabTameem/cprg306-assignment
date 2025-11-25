import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Get all items for a user
export async function getItems(userId) {
  if (!userId) return [];
  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsRef);
  const items = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return items;
}

// Add a new item
export async function addItem(userId, item) {
  if (!userId) return null;
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return { id: docRef.id, ...item };
}