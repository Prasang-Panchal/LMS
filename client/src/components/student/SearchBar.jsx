import React, { useState } from "react";
import { assets } from "../../assets /assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();

  // State to store the input value
  const [input, setInput] = useState(data ? data : "");

  // Function to handle the search event and navigate to the course list page
  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };

  return (
    // Search bar form with input field and search button
    <form
      onSubmit={onSearchHandler}
      className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded"
    >
      <img
        src={assets.search_icon}
        alt="search_icon"
        className="md:m-auto w-10 px-3 "
      />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search For Courses"
        className="w-full h-full outline-none text-gray-500/80"
      />
      <button
        type="submit"
        className="bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-3 mx-1"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
