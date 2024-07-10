import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards.js";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner.js";


const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something Went Wrong")
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} />)
        }
      </div>
    </div>
  );
};

export default App;
