import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { PlantFromDb } from "../types/plants";
import { plantImages } from "../constants/plantImages";

export async function fetchPlantsService() {
  const plantsRef = collection(db, "plants");
  const snapshot = await getDocs(plantsRef);

  const plants = snapshot.docs.map((doc) => {
    const data = doc.data() as PlantFromDb;

    return {
      id: doc.id,
      ...data,
      image: plantImages[data.imageKey],
    };
  });

  plants.sort((a, b) => Number(a.id) - Number(b.id));

  return plants;
}
