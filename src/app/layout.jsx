"use client"; // Ensure this is a client component

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the preloader for 4 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer); // Cleanup the timeout when the component unmounts
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/arhamlogosq.png" />
      </head>
      <body>
        {loading ? ( // Show Preloader while loading is true
          <Preloader />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
