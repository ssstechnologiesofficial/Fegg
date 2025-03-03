// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/pagination";
// import avatar from "../../assets/avatar1.png";

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await fetch("http://localhost:8006/api/testimonial"); // Replace with your actual API URL
//         if (!response.ok) {
//           throw new Error("Failed to fetch testimonials");
//         }
//         const data = await response.json();
//         setTestimonials(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   return (
//     <section className="flex justify-center items-center py-12 px-4">
//       <div className="w-full">
//         <h2 className="text-center text-gray-800 text-3xl font-bold mb-8">
//           What Our Students Say
//         </h2>

//         {loading && (
//           <p className="text-center text-gray-500">Loading testimonials...</p>
//         )}
//         {error && <p className="text-center text-red-500">{error}</p>}

//         {!loading && !error && testimonials.length > 0 && (
//           <Swiper
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             modules={[Pagination, Autoplay]}
//             spaceBetween={20}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 4 },
//               1536: { slidesPerView: 5 },
//             }}
//             className="pb-10"
//           >
//             {testimonials.map((testimonial, index) => (
//               <SwiperSlide key={index}>
//                 <div className="bg-white mb-3 p-6 h-[380px] flex flex-col justify-between rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-r-4 border-red-500">
//                   <div className="text-center">
//                     <FaQuoteLeft className="text-red-400 text-xl inline-block mb-4" />
//                     <p className="text-gray-700 italic mb-4 overflow-hidden text-ellipsis line-clamp-5 max-h-[120px]">
//                       {testimonial.text}
//                     </p>
//                     <FaQuoteRight className="text-red-400 text-xl inline-block mt-4" />
//                   </div>
//                   <div className="flex flex-col items-center mt-4">
//                     <img
//                       src={
//                         testimonial.image
//                           ? `http://localhost:8006${testimonial.image}`
//                           : avatar
//                       }
//                       alt={testimonial.author}
//                       className="w-16 h-16 rounded-full border-4 border-red-500 shadow-md"
//                     />
//                     <cite className="mt-4 text-gray-800 font-bold">
//                       {testimonial.author}
//                     </cite>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'
import avatar from '../../assets/avatar1.png'

const dummyTestimonials = [
  {
    text: 'इस प्लेटफॉर्म ने वास्तव में मेरे सीखने के अनुभव को बदल दिया है। सामग्री बेहतरीन है!',
    author: 'जॉन डो',
    image: '',
  },
  {
    text: 'मुझे इंटरैक्टिव पाठ और सहायक समुदाय बहुत पसंद हैं। अत्यधिक सिफारिश करता हूँ!',
    author: 'जेन स्मिथ',
    image: '',
  },
  {
    text: 'शिक्षक अद्भुत हैं, और पाठ्य सामग्री अच्छी तरह से संरचित है।',
    author: 'माइकल जॉनसन',
    image: '',
  },
  {
    text: 'मेरे करियर के लिए सबसे अच्छा निर्णय! मैंने जो कौशल सीखे हैं वे अमूल्य हैं।',
    author: 'एमिली डेविस',
    image: '',
  },
  {
    text: 'एक वास्तव में आकर्षक और प्रभावी तरीका सीखने का। पाँच सितारे!',
    author: 'रॉबर्ट ब्राउन',
    image: '',
  },
]

const Testimonials = () => {
  return (
    <section className="flex justify-center items-center py-12 px-4">
      <div className="w-full">
        <h2 className="text-center text-gray-800 text-3xl font-bold mb-8">
          हमारे छात्रों की राय
        </h2>

        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1536: { slidesPerView: 5 },
          }}
          className="pb-10"
        >
          {dummyTestimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white mb-3 p-6 h-[380px] flex flex-col justify-between rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-r-4 border-red-500">
                <div className="text-center">
                  <FaQuoteLeft className="text-red-400 text-xl inline-block mb-4" />
                  <p className="text-gray-700 italic mb-4 overflow-hidden text-ellipsis line-clamp-5 max-h-[120px]">
                    {testimonial.text}
                  </p>
                  <FaQuoteRight className="text-red-400 text-xl inline-block mt-4" />
                </div>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src={testimonial.image ? testimonial.image : avatar}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full border-4 border-red-500 shadow-md"
                  />
                  <cite className="mt-4 text-gray-800 font-bold">
                    {testimonial.author}
                  </cite>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
