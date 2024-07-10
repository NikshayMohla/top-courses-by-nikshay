import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards.js";
import { toast } from "react-toastify";



const App = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch (error) {
        toast.error("Something Went Wrong")
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
};

export default App;
