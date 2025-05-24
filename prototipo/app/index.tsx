import { collection, getDocs } from "firebase/firestore";
import { Text, View } from "react-native";
import { db } from "./firebaseConfig";
import { useEffect } from "react";

export default function Index() {
  
  const GETler = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.docs.map((item) => {
      console.log(item.data().nome)
    })
  }

  useEffect(() => {
    GETler()
  }, [])

  return (
    <Text>
      Olá
    </Text>
  );
}
