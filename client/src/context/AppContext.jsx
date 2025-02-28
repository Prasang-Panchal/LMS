import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets /assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  // Currency Symbol
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  //Fetch All Courses from the dummydata file assets.js
  const fetchAllCourses = () => {
    setAllCourses(dummyCourses);
  };

  //Function to calculate avarage rating of a course
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    //Calculate total rating of the course by adding all the ratings
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  // Fetch all courses on component mount
  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator, 
  };

  // Fetch all courses on component mount
  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
