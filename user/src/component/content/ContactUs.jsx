import React, { useState } from 'react'
import styles from './ContactUs.module.css'
import SummaryApi from '../../common/SummaryApi'

const ContactUs = () => {
  const [data, setData] = useState({
    name: '',
    numberMobile: '',
    email: '',
    msg: '',
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('contact form data', data)
    try {
      const postData = await fetch(SummaryApi.contact.url, {
        method: SummaryApi.contact.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log(postData)
      if (postData.ok) {
        const result = await postData.json()
        console.log('response', result)
        alert('Submited succesfully')
        // Reset the form data after successful submission
        setData({
          name: '',
          numberMobile: '',
          email: '',
          msg: '',
        })
      } else {
        console.log('Something went wrong')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center lg:space-x-10 py-12 px-4 lg:px-16 contactbg bg-white">
      {/* Form Column */}
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold text-red-700 mb-6">Contact Us</h2>
        <form
          className={`${styles.form} bg-white p-6 rounded-lg shadow-lg`}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-red-800 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
              name="name"
              value={data.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="numberMobile"
              className="block text-red-800 font-semibold mb-2"
            >
              Whatsapp Number
            </label>
            <input
              type="tel"
              id="numberMobile"
              className="w-full p-3 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Number"
              name="numberMobile"
              value={data.numberMobile}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-red-800 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="msg"
              className="block text-red-800 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="msg"
              className="w-full p-3 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
              rows="5"
              name="msg"
              value={data.msg}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-400 text-white py-3 rounded hover:bg-red-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details and Map Column */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-3xl font-bold text-red-700 mb-6">Our Location</h2>
        <p className="text-red-800 mb-4">Timing: 9:30AM to 6:30PM</p>
        <p className="text-red-800 mb-4">
          Office: Plot No. 67, sector A, Indrapuri, J.K. Road Bhopal (MP)
        </p>
        <p className="text-red-800 mb-4">Pincode: 462023</p>
        <p className="text-red-800 mb-4">Phone: +91 9876543210</p>
        <p className="text-red-800 mb-4">Email: abc65@gmail.com</p>
        <div
          className={`${styles.map} w-full h-64 bg-red-100 mt-6 rounded-lg overflow-hidden`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3819254361256!2d72.8368911!3d19.134752199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f4f288d61%3A0x300900382393f137!2sEducate%20Girls%20-%20Head%20Office!5e0!3m2!1sen!2sin!4v1739772938747!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
