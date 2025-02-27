import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets /assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  // Currency Symbol
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourses, setAllCourses] = useState([]);

  //Fetch All Courses from the dummydata file assets.js
  const fetchAllCourses = () => {
    setAllCourses(dummyCourses);
  };

  // Fetch all courses on component mount
  const value = {
    currency,
    allCourses,
  };

  // Fetch all courses on component mount
  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
