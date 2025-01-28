import React, { useState } from 'react';
import VolunteerForm from './VolunteerForm';
import DonerForm from './DonerForm';
import headlogo1 from '../../assets/flower-pot.png';
import TreeDonate from './TreeDonate';
import MoneyDonate from './MoneyDonate';
import LandDonate from './LandDonate';
import { PiTreeLight } from "react-icons/pi";
// import { GiReceiveMoney } from "react-icons/gi";
import { LiaDonateSolid } from "react-icons/lia";
import { PiIslandLight } from "react-icons/pi";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import UserRecordForm from './DonateReusableForm';


const Register = () => {

  useGSAP(()=>{
    gsap.fromTo(
    '.tabs,.heading-donate',
        { y: -40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }, []);



    // useEffect(() => {
    //   gsap.fromTo(
    //     '.intro-text',
    //     { y: 50, opacity: 0 },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       duration: 1.5,
    //       ease: 'power2.out',
    //     }
    //   );
    // }, []);


  const [formType, setFormType] = useState('money');

  const handleButtonClick = (type) => {
    setFormType(type);
  };

  

  return (
    <>
      <div className="w-full mt-32 px-4 lg:px-16">
        <div className="flex justify-center">
          <h2 className="heading01 font-bold mb-8 md:text-3xl heading-donate">
            {' '}
            Donate What Your ❤️ Want{' '}
          </h2>

          <img src={headlogo1} className="h-14 inline" alt="" />
        </div>
        <div className="flex gap-4 md:mx-10 mt-6">
          <div className="w-1/3">
            <button
              className={`tabs w-full py-6 text-2xl rounded-lg font-semibold ${
                formType === 'money' ? 'bg-primary' : 'bg-green-700'
              } text-white`}
              onClick={() => handleButtonClick('money')}
            >
              Donate Money <LiaDonateSolid  className='inline sm:text-6xl text-2xl' />
            </button>                                                                                
          </div>
          <div className="w-1/3">
            <button
              className={` tabs w-full py-6 text-2xl rounded-lg font-semibold ${
                formType === 'tree' ? 'bg-primary' : 'bg-green-700'
              } text-white`}
              onClick={() => handleButtonClick('tree')}
            >
              Donate Tree < PiTreeLight className='inline sm:text-6xl text-2xl' />
            </button>
          </div>
          <div className="w-1/3">
            <button
              className={`tabs w-full py-6 text-2xl rounded-lg font-semibold ${
                formType === 'land' ? 'bg-primary' : 'bg-green-700'
              } text-white`}
              onClick={() => handleButtonClick('land')}
            >
              Donate Land < PiIslandLight className='inline sm:text-6xl text-2xl' />
            </button>
          </div>
        </div>

        <div className="mt-8">
          {formType === 'money' && (
            <div className="rounded-lg">
              {/* Tree donation form */}
              <MoneyDonate />
            </div>
          )}

          {formType === 'tree' && (
            <div className=" rounded-lg shadow-md">
             
              {/* Land donation form */}
              <UserRecordForm donationType="tree" />
            </div>
          )}

          {formType === 'land' && (
            <div className=" rounded-lg shadow-md">

              {/* Money donation form */}
              <UserRecordForm donationType="land" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
