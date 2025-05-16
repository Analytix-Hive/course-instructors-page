import React from "react";

const SecondSection = ({ classesRef }) => {
  const points = [
    {
      head: "More Than Just Teaching: Make a Lasting Impact",
      desc: "Your knowledge and expertise are invaluable. They are the product of years of dedication, countless hours of learning, and real-world experience. At Analytix Hive, we believe this knowledge shouldn't be confined – it should be shared, multiplied, and used for the greater good. By creating a course with us, you're not just imparting skills; you're empowering individuals, fostering innovation, and contributing to the growth of our communities. You're becoming a catalyst for positive change.",
    },
    {
      head: "Unlock Financial Growth Through Your Expertise",
      desc: "We deeply value the time and effort our instructors invest. Analytix Hive is committed to a model that generously rewards your contributions. You'll have the opportunity to earn significant income as your course reaches a growing audience eager to learn the skills you possess. This is a chance to turn your expertise into a sustainable revenue stream.",
    },
    {
      head: "Your Knowledge, Your Rules: Maintain Full Ownership",
      desc: "Your knowledge and expertise are invaluable. They are the product of years of dedication, countless hours of learning, and real-world experience. At Analytix Hive, we believe this knowledge shouldn't be confined – it should be shared, multiplied, and used for the greater good. By creating a course with us, you're not just imparting skills; you're empowering individuals, fostering innovation, and contributing to the growth of our communities. You're becoming a catalyst for positive change.",
    },
    {
      head: "Build Your Legacy: Establish Credibility and Connect with the Future",
      desc: "Your skills and experience have the power to inspire and transform lives. By sharing your knowledge on Analytix Hive, you're not just teaching; you're building your reputation as a thought leader and expert in your field. Imagine the impact of connecting with aspiring professionals who will go on to become innovators, leaders, and even future collaborators. The students you teach today could be the CEOs, consultants, and partners of tomorrow. This is an unparalleled opportunity to build your network, enhance your credibility, and leave a lasting legacy.",
    },
  ];

  return (
    <section
      className="w-[95%] max-w-7xl mx-auto py-12 text-white"
      ref={classesRef}
    >
      <h1 className="text-xl lg:text-3xl font-bold text-[#061c2d] mb-10 w-[95%] lg:w-1/2 m-auto">
        Shape the Future with Analytix Hive
      </h1>
      <p className="bg-amber-200 text-[#061c2d] font-medium p-4 rounded-md shadow mb-10 leading-relaxed">
        We understand that creating a comprehensive and impactful course
        requires dedication and effort. That's why we want to clearly articulate
        why joining Analytix Hive as an instructor is not just a contribution,
        but a strategic and rewarding opportunity:
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {points.map((point, index) => (
          <div
            className="bg-[#061c2d] border border-amber-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            key={index}
          >
            <h1 className="text-amber-300 text-lg md:text-xl font-semibold mb-3">
              {point.head}
            </h1>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
