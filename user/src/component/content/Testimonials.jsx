import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import "swiper/css";
import "swiper/css/pagination";
import avatar from '../../assets/avatar1.png'

const Testimonials = () => {
  const testimonials = [
    {
      text: "Using [www.abcopenschool.com] has been a game-changer for me! As an open school student, I struggled to stay organized and keep up with coursework, but this platform has revolutionized my approach to learning. The user-friendly interface makes navigation a breeze, and the wealth of educational resources available has truly enriched my studies. Thanks to [www.abcopenschool.com], I've seen a significant improvement in my grades and overall academic performance. I highly recommend it to any student looking to excel in their studies!",
      author: "Amit Kumar",
      image: avatar, 
    },
    {
      text: "This platform has simplified learning for me! I used to find it hard to manage multiple subjects, but now I feel more confident and organized. Highly recommend it!",
      author: "Priya Sharma",
      image: avatar, 
    },
    {
      text: "The resources and guidance provided by this platform have made a huge difference in my preparation for exams. My performance has improved significantly!",
      author: "Rohit Verma",
      image: avatar, 
    },
  ];

  return (
    <section className="bg-red-400 p-6 flex justify-center items-center m-6">
      <div className="max-w-2xl w-full">
        <h2 className="text-center text-white text-2xl font-bold mb-6">
          What Our Students Say
        </h2>
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <div className="text-center">
                <FaQuoteLeft className="text-red-400 text-3xl inline-block mb-4" />
                <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                <FaQuoteRight className="text-red-400 text-3xl inline-block mt-4" />
              </div>
              <div className="flex flex-col items-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full border-4 border-red-400 shadow-md"
                />
                <cite className="mt-4 text-gray-800 font-bold">{testimonial.author}</cite>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
