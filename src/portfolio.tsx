import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { doc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "preact/hooks";

import './app.css'

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";
// @ts-ignore
import { Card, ExampleProp } from "/components/Card";
// @ts-ignore
import ProjectSection from "/components/ProjectSection";

interface DBProp {
  title: string;
  url: string;
  description: string;
  imgPath: string;
  imgUrl: string;
  github: string;
  order: number;
}

// const firebaseConfig = {
//   apiKey: "AIzaSyC0MiV536F8BZWBB7PDC3ZPnSO5a_3gOy4",
//   authDomain: "portfolio-ceb45.firebaseapp.com",
//   projectId: "portfolio-ceb45",
//   storageBucket: "portfolio-ceb45.appspot.com",
//   messagingSenderId: "60602057832",
//   appId: "1:60602057832:web:16ee420609c2e32a51a7dd",
//   measurementId: "G-PJ86566167"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const querySnapshot = await getDocs(collection(db, "projects"));
// querySnapshot.forEach((doc:any) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

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
        // dataArr: ExampleProp[]  = [];
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

    <h1 className="mb-12 text-5xl font-black">Projects</h1>

    {/* <div className="align-items-center mb-6 flex flex-col"> */}
      <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2">
        {dataArr.map((dataArr: ExampleProp) => (
          <Card {...dataArr} />
        ))}
      </div>
    {/* </div> */}

      <Footer />
    </div>
  )
}