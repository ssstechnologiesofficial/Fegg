import hero from "../../assets/hero.webp";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutIntro = () => {
  const heroImageRef = useRef(null);
  const textSectionRef = useRef(null);
  const historySectionRef = useRef(null);
  const visionSectionRef = useRef(null);
  const missionSectionRef = useRef(null);
  const ordinanceSectionRef = useRef(null);

  useEffect(() => {
    // Hero image animation
    gsap.fromTo(
      heroImageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Text section animation
    gsap.fromTo(
      textSectionRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // History section animation
    gsap.fromTo(
      historySectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: historySectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Vision section animation
    gsap.fromTo(
      visionSectionRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: visionSectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Mission section animation
    gsap.fromTo(
      missionSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: missionSectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Ordinance/Act section animation
    gsap.fromTo(
      ordinanceSectionRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ordinanceSectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="bg-gray-50 relative">
      <img src={hero} alt="History" className="object-cover w-full" />
      <div className="bg-white mx-6 relative -mt-16 rounded-lg shadow-lg mb-8">
        <div className="container px-4 md:px-8 lg:px-16 py-12">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <a href="/" className="hover:text-red-500">
              Home
            </a>{" "}
            &gt; About us
          </div>

          {/* Heading Section */}
          <h1 className="text-center text-2xl md:text-3xl font-bold text-red-500 mb-8" ref={textSectionRef}>
            ABOUT US
          </h1>

          <div className="mb-12" ref={textSectionRef}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Foundation to Open School Globally
            </h2>
            <p className="text-gray-600">
              The open schooling system was established in XXXX in the state to
              provide flexible education to diverse learners. It evolved from
              the National Open School (NOS), aiming to address the educational
              needs of those unable to access traditional schooling.
            </p>
            <button className="mt-4 px-6 py-2 bg-red-500 text-white text-sm rounded-3xl hover:bg-red-600">
              READ MORE
            </button>
          </div>

          {/* History Section */}
          <div className="flex bg-gray-50 shadow-lg mb-12" ref={historySectionRef}>
            <img
              src={hero}
              alt="History"
              className="w-1/3 rounded-md object-cover"
            />
            <div className="w-2/3 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 p-6 mb-4">
                History
              </h3>
              <p className="text-gray-600">
                The open schooling system was established in XXXX in the state
                to provide flexible education to diverse learners. It evolved
                from the National Open School (NOS), aiming to address the
                educational needs of those unable to access traditional
                schooling.
              </p>
              <button className="mt-4 px-6 py-2 text-red-500 font-bold text-sm">
                READ MORE
              </button>
            </div>
          </div>

          {/* Vision and Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="flex flex-col border rounded-md" ref={visionSectionRef}>
              <img
                src={hero}
                alt="Vision"
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 ps-2">
                Vision
              </h3>
              <p className="text-gray-600 p-2">
                Open schooling system envisions a future where education is
                accessible to all, transcending conventional boundaries. It
                strives to create personalized learning pathways, harnessing the
                transformative power of education for social inclusion and
                equitable opportunities, ultimately building a prosperous and
                inclusive society.
              </p>
              <button className="mt-4 px-6 py-2 text-red-500 font-bold text-sm self-start">
                READ MORE
              </button>
            </div>

            {/* Mission */}
            <div className="flex flex-col border rounded-md" ref={missionSectionRef}>
              <img
                src={hero}
                alt="Mission"
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 ps-2">
                Mission
              </h3>
              <p className="text-gray-600 p-2">
                Open schooling system aims to offer inclusive and quality
                education, reaching marginalized communities and individuals
                facing barriers to learning. It seeks to empower learners with
                knowledge and skills, fostering lifelong learning and
                socio-economic development.
              </p>
              <button className="mt-4 px-6 py-2 text-red-500 font-bold text-sm self-start">
                READ MORE
              </button>
            </div>
          </div>

          {/* ORDINANCE/ACT */}
          <div className="flex bg-gray-50 rounded-md shadow-lg my-12" ref={ordinanceSectionRef}>
            <img
              src={hero}
              alt="History"
              className="w-1/3 rounded-md object-cover"
            />
            <div className="w-2/3 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 p-6 mb-4">
                ORDINANCE/ACT
              </h3>
              <p className="text-gray-600">
                The Open Schooling Act, 1989 is a law that was passed in India
                to promote distance education and open schooling. This act
                allowed the establishment of open schools, which offer education
                and examination facilities to students of all ages, regardless
                of their age, gender, caste, religion, or place of birth. The
                act also aimed to provide educational opportunities to
                disadvantaged groups and children who could not attend
                traditional schools. The act was later amended in 1990 and 2009
                to include additional provisions and benefits.
              </p>
              <button className="mt-4 px-6 py-2 text-red-500 font-bold text-sm">
                READ MORE
              </button>
            </div>
          </div>

          {/* More Features Section */}
          <div>
            <h2 className="text-lg font-semibold text-red-500 mb-6">
              MORE FEATURES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Objective */}
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-2 flex items-center border-t-2 border-red-500">
                  OBJECTIVE <span className="ml-2 text-red-500">→</span>
                </h3>
                <p className="text-gray-600">
                  Our goal is to improve access and quality of education for
                  over XX million children cumulatively by 2030.
                </p>
              </div>

              {/* Committee */}
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-2 flex items-center border-t-2 border-red-500">
                  COMMITTEE <span className="ml-2 text-red-500">→</span>
                </h3>
                <p className="text-gray-600">
                  xxx, xxx, aaa, bbb, ccc, ddd, eee
                </p>
              </div>

              {/* RTI */}
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-2 flex items-center border-t-2 border-red-500">
                  RTI <span className="ml-2 text-red-500">→</span>
                </h3>
                <p className="text-gray-600">
                  The RTE is a human right that guarantees free and compulsory
                  education for children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
