import { useState } from "react";
import { db, collection, addDoc } from "../firebaseConfig";
import firstImage from "../assets/undraw_data_0ml2 (1).png";
import Form from "../components/Form";

const Section = ({ waitlistRef }) => {

  return (
    <main
      ref={waitlistRef}
      className="w-[95%] max-w-7xl mx-auto h-auto mt-20 flex flex-col-reverse lg:flex-row justify-between items-center"
    >
      <section className="w-[95%] lg:w-[50%] my-10">
        <div className="w-full text-[#061c2d] text-center lg:text-left">
          <h1 className="capitalize font-bold text-2xl md:text-3xl lg:text-4xl my-2">
            Call for Course Instructors at Analytix Hive
          </h1>
          <p className="text-sm md:text-lg my-5">
            Imagine a world where powerful analytical skills are accessible to
            everyone, empowering individuals and driving progress across Africa
            and beyond. This is the vision of Analytix Hive, and you, as a
            skilled professional, hold a crucial key to unlocking it.
          </p>
        </div>
        <Form />
      </section>

      <aside className="w-[90%] md:w-[70%] lg:w-[45%]">
        <img src={firstImage} alt="illustration" />
      </aside>
    </main>
  );
};

export default Section;
