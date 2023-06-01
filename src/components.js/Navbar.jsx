import React, { useEffect, useState } from 'react'
import moment from "moment";

const Navbar = () => {
   const [currentDate, setCurrentDate] = useState(
     moment().format("MMMM Do YYYY, h:mm:ss a")
   );

   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
     }, 1000); 

     return () => clearInterval(interval);
   }, []);
  return (
    <section className="text-black w-[90%] mx-auto py-10 flex justify-between items-center">
      {/* left side */}
      <div className="px-4 py-2 rounded-lg cursor-pointer">
        <h1 className="text-lg text-white font-semibold md:text-2xl">
          Weather <span className="font-bold animate-pulse">Me!!</span>
        </h1>
      </div>
      {/* right side */}
      <div>
        <p className="text-base text-white md:text-xl font-semibold shadow-md px-3 py-2 rounded-lg">
          {currentDate}
        </p>
      </div>
    </section>
  );
}

export default Navbar