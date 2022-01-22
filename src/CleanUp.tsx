import { useState, useEffect } from "react";

export const CleanUp = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const incrementNum = () => {
    console.log("Mouse evnet invoke");
    setCurrentNum((preNumber) => preNumber + 1);
  };
  useEffect(() => {
    console.log("useEffect in CleanUp invoked!");
    window.addEventListener("mousedown", incrementNum);
    return () => {
      console.log("Cleanup invoked !")
      window.removeEventListener("mousedown", incrementNum);
    };
  }, []);
  return <div>{currentNum}</div>;
};
