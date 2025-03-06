import React, { useState } from 'react'
import styles from './ContactUs.module.css'


const ContactUs = () => {
  

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center lg:space-x-10 py-12 px-4 lg:px-16 contactbg bg-white">
     
      {/* Contact Details and Map Column */}
      <div className=" w-full">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Location</h2>
        <p className=" mb-4">
        Zone-I, Board office campus, open school building, Shivaji Nagar, Bhopal, Madhya Pradesh.
        Pincode:- 462011
        </p>
        <p className=" mb-4">Pincode: 462011</p>
        <p className=" mb-4">Phone: 0755 - 2552106, 2671066</p>
        <p className=" mb-4">Email:  info.in@educategirls.ngo</p>
        <div
          className={`${styles.map} w-full  mt-6 rounded-lg overflow-hidden`}
        >
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3666.325693180825!2d77.4281994!3d23.2312324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c431a30d258c7%3A0x812204f32b855fc5!2sMPSOS%20EDUCATION%20BOARD!5e0!3m2!1sen!2sin!4v1740466738822!5m2!1sen!2sin"  height="450"  style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
