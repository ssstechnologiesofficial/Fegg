import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import SummaryApi from '../../common/SummaryApi';

const ContactUs = () => {
  const [data, setData] = useState({
    name: '',
    numberMobile: '',
    email: '',
    msg: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('contact form data', data);
    try {
      const postData = await fetch(SummaryApi.contact.url, {
        method: SummaryApi.contact.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(postData);
      if (postData.ok) {
        const result = await postData.json();
        console.log('response', result);
        alert('Submited succesfully');
        // Reset the form data after successful submission
        setData({
          name: '',
          numberMobile: '',
          email: '',
          msg: '',
        });
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center lg:space-x-10 py-12 px-4 lg:px-16 contactbg bg-SeaBlue">
      {/* Form Column */}
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h2>
        <form
          className={`${styles.form} bg-white p-6 rounded-lg shadow-lg`}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-green-800 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
              name="name"
              value={data.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="numberMobile"
              className="block text-green-800 font-semibold mb-2"
            >
              Whatsapp Number
            </label>
            <input
              type="tel"
              id="numberMobile"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Number"
              name="numberMobile"
              value={data.numberMobile}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-green-800 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="msg"
              className="block text-green-800 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="msg"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Message"
              rows="5"
              name="msg"
              value={data.msg}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details and Map Column */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Our Location</h2>
        <p className="text-green-800 mb-4">Timing: 9:30AM to 6:30PM</p>
        <p className="text-green-800 mb-4">
          Office: Plot No. 67, sector A, Indrapuri, J.K. Road Bhopal (MP)
        </p>
        <p className="text-green-800 mb-4">Pincode: 462023</p>
        <p className="text-green-800 mb-4">Phone: +91 9826499329</p>
        <p className="text-green-800 mb-4">Email: oxyvan65@gmail.com</p>
        <div
          className={`${styles.map} w-full h-64 bg-green-100 mt-6 rounded-lg overflow-hidden`}
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.6968190541393!2d77.45726259999999!3d23.2541172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4208f5558a31%3A0xb0f0e9bca3db4bef!2s67%2C%20Indrapuri%20A%20sector%2C%20Sector%20A%2C%20Indrapuri%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!5e0!3m2!1sen!2sin!4v1726762808540!5m2!1sen!2sin"
            // frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
