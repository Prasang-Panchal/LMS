import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);

  const { allCourses } = useContext(AppContext);

  //Fetch course data based on the course id from the URL
  const fetchCourseData = async () => {
    const findCourse = await allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  //Fetch course data on component mount
  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
      <div className="absolute top-0 left-0 w-full h-[500px] -z-[-1] bg-gradient-to-b from-cyan-100/70"></div>

      {/* Left Column */}
      <div className=""></div>

      {/* Right Column */}
      <div className=""></div>
    </div>
  );
};

export default CourseDetails;
