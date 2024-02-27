import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useState, useEffect } from "preact/hooks";

import './app.css'

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";
// @ts-ignore
import { Card, ExampleProp } from "/components/Card";

// * Personal Schema to remember what to add on Firebase
// interface DBProp {
//   title: string;
//   url: string;
//   description: string;
//   imgPath: string;
//   imgUrl: string;
//   github: string;
//   order: number;
// }

const dataArr: ExampleProp[]  = []
export function Portfolio() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const firebaseConfig = {
          apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
          authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
          projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
          storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
          appId: import.meta.env.VITE_FIREBASE_APP_ID,
          measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
        };
        
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        
        const db = getFirestore(app);
        
        const querySnapshot = await getDocs(collection(db, "projects"));
        dataArr.length = 0;
        querySnapshot.forEach((doc:any) => {
          // console.log(doc.id, " => ", doc.data().title);
          dataArr.push(doc.data());
          setData(doc.data());
        });

        


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataArr]);

  return (
    <div className="flex flex-col">
    <Header />

    <h1 className="mb-12 text-5xl font-semibold">Projects</h1>

      <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2">
        {dataArr.map((dataArr: ExampleProp) => (
          <Card {...dataArr} />
        ))}
      </div>

      <Footer />
    </div>
  )
}