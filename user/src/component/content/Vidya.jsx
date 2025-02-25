
import React from "react";
import vidya from '../../assets/pragati2.jpg'
const Vidya = () => {
  return (
    <div className="m-6   mx-10  shadow-lg rounded-lg">
      <h3 className="text-2xl sm:text-5xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] py-1">
      Vidya Program
      </h3>
      <div className="flex flex-col md:flex-row items-center ">
        <img
          src={vidya}// Replace with actual image URL
          alt="Vidya Program"
          className="w-full md:w-1/2 rounded-lg border-r-8 border-b-8 border-[#fd645b]"
        />
        <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left card">
          {/* <h2 className="text-3xl font-bold text-primary mb-4">Vidya Program</h2> */}
          <p className="text-gray-700">
            Utilizing government school infrastructure and community engagement, 
            the Vidya Program reintegrates out-of-school girls (aged 6-14) into the mainstream education system. 
            Our community network, "Team Balika," identifies marginalized girls in rural areas, raises awareness, 
            and assists with enrollment.
          </p>
          <p className="text-gray-700 mt-3">
            To support their learning, our partners provide supplementary literacy classes to help them catch up. 
            Many of these girls are the first generation in their families to attend school, facing academic challenges. 
            To bridge these gaps, we use a specially designed micro-competency-based curriculum, 
            "Box of Knowledge" (GKP), for grades 3-5, focusing on foundational skills crucial for long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vidya;
