import React, { useState } from 'react';
import QRscan from '../../assets/upiQR.png';
import donate01 from '../../assets/DONATE01.png';
import donate02 from '../../assets/DONATE02.png';
import donate03 from '../../assets/DONATE03.png';
import donate04 from '../../assets/DONATE04.png';
import tree from '../../assets/tree.webp';
import { LuPalmtree } from 'react-icons/lu';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MoneyDonate = () => {

  useGSAP(()=>{
    gsap.fromTo(
    '.trees-tab',
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }, []);


  const [hoveredIndex, setHoveredIndex] = useState(0); // Default the first item to be "hovered"

  const items = [
    { label: '20 x 1', value: '20/-' },
    { label: '20 x 4', value: '80/-' },
    { label: '20 x 8', value: '160/-' },
    { label: '20 x 20', value: '400/-' },
  ];

  return (
    <>
      <div className="shadow-2xl shadow-lime-500 md:mx-10 mt-20">
        <div className="rounded mx-4 md:mx-16 my-6">
          <div className="text-center text-xl md:text-2xl mt-8 underline">
            How Much You Want To Donate
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10 justify-center md:justify-evenly my-7 pb-3 trees-tab
          ">
            {items.map((item, index) => (
              <div
                key={index}
                className={`p-2 md:p-3 px-4 md:px-6 font-bold rounded-full transition duration-300 ease-in-out text-lg md:text-xl shadow-lime-600 shadow 
        ${
          hoveredIndex === index
            ? 'text-white bg-green-700'
            : 'text-black hover:text-white hover:bg-green-700'
        }`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {item.label}
                <img
                  src={tree}
                  alt=""
                  className="inline h-8 md:h-11 pb-1 md:pb-2"
                />{' '}
                = {item.value}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mb-28 mt-7 lg:justify-center lg:items-center mx-4 lg:mx-28 py-6 ">
          {/* 2nd Item (Moves to the bottom on smaller screens) */}
          <div className="shadow-2xl bg-primary lg:w-[30%] order-2 lg:order-none text-white font-semibold p-5 py-12 flex flex-col justify-center ">
            <div className="text-center mb-12 text-3xl lg:text-4xl underline">
              Bank<span className="text-secondary">ing det</span>ails
            </div>
            <div className="my-4 text-lg lg:text-xl">
              <span className="text-secondary">Bank Name:</span> SBI (State Bank
              Of India)
            </div>
            <div className="my-4 text-lg lg:text-xl">
              <span className="text-secondary">Account name:</span> OXYVAN
              PARYAWARAN SANRAKSHAN SAMITI
            </div>
            <div className="my-4 text-lg lg:text-xl">
              <span className="text-secondary">Account No.:</span>{' '}
              00000043097813492
            </div>
            <div className="my-4 text-lg lg:text-xl">
              <span className="text-secondary">IFSC Code:</span> SBIN0001308
            </div>
            <div className="my-4 text-lg lg:text-xl">
              <span className="text-secondary">Branch:</span> Main Branch New
              Market Bhopal, M.P.
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <img
                src={donate01}
                className="h-16 lg:h-20 mx-auto"
                alt="Donate 01"
              />
              <img
                src={donate02}
                className="h-16 lg:h-20 mx-auto"
                alt="Donate 02"
              />
              <img
                src={donate04}
                className="h-16 lg:h-20 mx-auto"
                alt="Donate 04"
              />
            </div>
          </div>

          {/* 3rd Item (Moves to the top on smaller screens) */}
          <div className="lg:w-[40%] order-1 lg:order-none p-4 lg:p-0">
            <img className="w-full h-auto" src={QRscan} alt="QR Code Scan" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyDonate;
