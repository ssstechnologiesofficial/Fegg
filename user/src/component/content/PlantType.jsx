import React, { useEffect } from 'react';
import tree1 from '../../assets/banyan.webp';
import arjuna from '../../assets/arjuna.webp';
import neem from '../../assets/neem.jfif';
import pipal from '../../assets/pipal.jfif';
import sandlewood from '../../assets/sandlewood.jpg';
import jamun from '../../assets/jamun.jpg';
import bamboo from '../../assets/bamboo.webp';
import earth from '../../assets/earth.png';
import headlogo1 from '../../assets/flower-pot.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PlantType = () => {
  useEffect(() => {
    gsap.fromTo(
      '.plant-image',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.plant-image',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      '.plant-text',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.plant-text',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="w-full px-4 lg:px-16 plant">
      <div className="mt-10 lg:mt-20 md:p-4 text-center justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <div className="heading01 mr-2">Nature's Oxygen Heroes</div>
            <img src={headlogo1} className="h-14" alt="" />
          </div>
          <div className="subheading text-justify mt-2">
            Discover the magnificent plants that contribute the most to our
            environment by producing abundant oxygen, essential for life on
            Earth.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row py-1 mt-0 lg:mt-4 text-center justify-center items-center">
          <div className="w-full lg:w-1/2  p-2 plant-image ">
            <img src={earth} alt="Earth" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-1/2 text-xs md:p-2 rounded-2xl md:mt-6 text-justify">
            <div className="flex items-start plant-text ps-0">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={tree1}
                  alt="Banyan Tree"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover plant-image"
                />
              </span>
              <span className="ps-3">
                <div className="text-lg text-primary font-bold">
                  Banyan Tree
                </div>
                <div className="text-sm">
                  Known for its massive size and extensive canopy, the Banyan
                  tree is a powerful oxygen producer, contributing significantly
                  to the environment.
                </div>
              </span>
            </div>

            {/* Repeat similar blocks for other trees */}
            <div className="flex py-1 ms-0 sm:ms-20 items-start plant-text">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={pipal}
                  alt="Peepal Tree"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover plant-image"
                />
              </span>
              <span className="ps-3">
                <div className="text-lg text-primary font-bold">
                  Peepal Tree
                </div>
                <div className="text-sm">
                  Known for its massive size and extensive canopy, the Peepal
                  tree is a powerful oxygen producer, contributing significantly
                  to the environment.
                </div>
              </span>
            </div>
            <div className="flex py-1 ms-0 sm:ms-32 items-start plant-text">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={bamboo}
                  alt="Peepal Tree"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover plant-image"
                />
              </span>
              <span className="ps-3">
                <div className="text-lg text-primary font-bold">
                  Bamboo Tree
                </div>
                <div className="text-sm">
                  Bamboo is a fast-growing, sustainable resource that helps in
                  reducing deforestation and absorbs more CO2 than other trees,
                  making it great for combating climate change.
                </div>
              </span>
            </div>

            <div className="flex py-1 ms-0 sm:ms-40 items-start plant-text">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={neem}
                  alt="Neem Tree"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover plant-image"
                />
              </span>
              <span className="ps-3">
                <div className="text-lg text-primary font-bold">Neem Tree</div>
                <div className="text-sm">
                  Neem is a fast-growing tree that releases a large amount of
                  oxygen, improving air quality. It has significant medicinal
                  properties, making it valuable for traditional medicine.
                </div>
              </span>
            </div>

            <div className="flex py-1 ms-0 sm:ms-32 items-start plant-text">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={arjuna}
                  alt="Arjuna Tree"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover plant-image"
                />
              </span>
              <span className="ps-3">
                <div className="text-lg text-primary font-bold">
                  Arjuna Tree
                </div>
                <div className="text-sm">
                  Arjuna is known for its high oxygen release, contributing to
                  better air quality. Traditionally used in Ayurvedic medicine,
                  the Arjuna tree is valued for its therapeutic properties,
                  especially for heart health.
                </div>
              </span>
            </div>
            <div className="flex py-1 ms-0 sm:ms-20 items-start plant-text">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={jamun}
                  alt="Arjuna Tree"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover plant-image"
                />
              </span>
              <span className="ps-3">
                <div className="text-lg text-primary font-bold">Jamun Tree</div>
                <div className="text-sm">
                  Jamun is rich in vitamins, antioxidants, and minerals. It is
                  known to help manage blood sugar levels, making it beneficial
                  for diabetics.Jamun helps in maintaining a healthy heart by
                  controlling blood pressure and cholesterol levels.
                </div>
              </span>
            </div>

            <div className="flex py-1 items-start plant-text ps-0">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={sandlewood}
                  alt="Sandalwood Tree"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover plant-image"
                />
              </span>
              <span className="ps-3">
                <div className="text-lg text-primary font-bold">
                  Sandalwood Tree
                </div>
                <div className="text-sm">
                  Sandalwood trees are known for their oxygen-releasing
                  properties, especially in their mature stages. The wood is
                  highly valued for its fragrance and is used in a variety of
                  products, from perfumes to religious rituals.
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantType;
