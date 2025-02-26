// import React, { useState } from 'react'
// import { FaEye, FaEyeSlash } from 'react-icons/fa'
// import { Link, useNavigate } from 'react-router-dom'
// import fagglogo from '../../public/eg-logo.png'
// import mpsoslogo from '../../public/mpsos_logo.png'
// import singin from '../../public/loginbg0.jpg'

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   })
//   const [error, setError] = useState('')
//   const navigate = useNavigate()

//   const handleOnChange = (e) => {
//     const { name, value } = e.target
//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handlePasswordToggle = () => {
//     setShowPassword(!showPassword)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setError('')

//     // Hardcoded login functionality
//     const hardcodedEmail = 'admin@gmail.com'
//     const hardcodedPassword = 'admin123'

//     if (data.email === hardcodedEmail && data.password === hardcodedPassword) {
//       // Simulate setting a token in localStorage
//       localStorage.setItem('token', 'hardcoded-token')
//       navigate('/dashboard')
//     } else {
//       setError('Invalid email or password')
//     }
//   }
//   const getColor = (letter) => {
//     const colors = {
//       A: 'bg-red-600',
//       B: 'bg-green-500',
//       C: 'bg-yellow-400',
//       D: 'bg-blue-500',
//       E: 'bg-orange-500',
//       G: 'bg-purple-500',
//     }
//     return colors[letter] || 'bg-gray-500'
//   }

//   return (
//     <section
//       id="login"
//       className="flex items-center justify-center min-h-screen text-white bg-no-repeat bg-cover  object-contain"
//       style={{ backgroundImage: `url(${singin})` }}
//     >
//       <div className="relative sm:w-[40vw] sm:h-[40vw] w-[0vw] h-[0vw] hidden  max-w-60 max-h-60 mx-auto sm:flex items-center justify-center">
//         {/* Center Logo */}
//         <img
//           src={fagglogo}
//           className="sm:w-[15vw] sm:h-[15vw] w-[16vw] h-[16vw] max-w-24 max-h-24 object-fill absolute bg-white rounded-full p-2 border-2 border-[#ff0000]"
//         />

//         {/* Circular Positioned Divs */}
//         {[
//           { letter: 'A', angle: 0, color: 'bg-[#ff0000]' },
//           { letter: '1', angle: 60, color: 'bg-green-500' },
//           { letter: 'अ', angle: 120, color: 'bg-yellow-400' },
//           { letter: 'D', angle: 180, color: 'bg-blue-500' },
//           { letter: '5', angle: 240, color: 'bg-orange-500' },
//           { letter: 'न', angle: 300, color: 'bg-purple-500' },
//         ].map(({ letter, angle, color }) => {
//           const radius = 'max(10vw, 90px)' // Dynamically scales radius
//           return (
//             <div
//               key={letter}
//               className={`absolute w-[15vw] h-[15vw] max-w-18 max-h-18 sm:w-[8vw] sm:h-[8vw] flex  justify-center items-center rounded-full text-white font-bold text-[4vw] sm:text-4xl ${color} hover:scale-105 transition-all`}
//               style={{
//                 top: `calc(50% - 5vw + ${radius} * sin(${
//                   (angle * Math.PI) / 180
//                 }))`,
//                 left: `calc(50% - 4.4vw + ${radius} * cos(${
//                   (angle * Math.PI) / 180
//                 }))`,
//               }}
//             >
//               {letter}
//             </div>
//           )
//         })}
//       </div>

//       <div className="container max-w-md mx-auto p-4">
//         <div className="bg-black bg-opacity-65 p-8 rounded-lg border-red-500 border-2 ">
//           <div className="bg-white rounded-full flex items-center justify-center w-32 h-32 mx-auto border-l-4  border-b-4 border-red-500">
//             <img src={fagglogo} className="w-20 object-fill mx-auto mb-4" />
//           </div>
//           {error && (
//             <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
//           )}
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <div className="flex items-center justify-start">
//                 <label className="block text-sm font-medium mb-2 bg-[#ff0000] w-[50px] px-1">
//                   Email :
//                 </label>
//                 <span className="w-0 h-0 border-l-[0px] border-l-transparent border-t-[20px] border-t-[#ff0000] border-r-[13px] border-r-transparent mb-2"></span>
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={data.email}
//                 onChange={handleOnChange}
//                 className="w-full px-4 py-3 bg-white text-black rounded-lg border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 required
//               />
//             </div>

//             <div className="relative">
//               <div className="flex items-center justify-start">
//                 <label className="block text-sm font-medium mb-2 bg-[#ff0000] w-[80px] px-1">
//                   Password :
//                 </label>
//                 <span className="w-0 h-0 border-l-[0px] border-l-transparent border-t-[20px] border-t-[#ff0000] border-r-[13px] border-r-transparent mb-2"></span>
//               </div>

//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Enter your password"
//                 value={data.password}
//                 onChange={handleOnChange}
//                 className="w-full px-4 py-3 bg-white text-black rounded-lg border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={handlePasswordToggle}
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-400"
//               >
//                 {showPassword ? (
//                   <FaEyeSlash className="h-5 w-5" aria-hidden="true" />
//                 ) : (
//                   <FaEye className="h-5 w-5" aria-hidden="true" />
//                 )}
//               </button>
//               <Link
//                 to="/forgotpassword"
//                 className="block mt-2 text-white hover:underline text-right"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 bg-[#d2d2d2] text-[#fe0000] font-bold rounded-lg hover:bg-[#c9c7c7] focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:ring-opacity-100 focus:scale-105 transition-all"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Login

import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import fagglogo from '../../public/eg-logo.png'
import mpsoslogo from '../../public/mpsos_logo.png'
import singin from '../../public/loginbg0.jpg'
import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post(SummaryApi.login.url, data)
      localStorage.setItem('token', response.data.token)
      navigate('/dashboard')
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid email or password')
    }
  }
  const getColor = (letter) => {
    const colors = {
      A: 'bg-red-600',
      B: 'bg-green-500',
      C: 'bg-yellow-400',
      D: 'bg-blue-500',
      E: 'bg-orange-500',
      G: 'bg-purple-500',
    }
    return colors[letter] || 'bg-gray-500'
  }

  return (
    <section
      id="login"
      className="flex items-center justify-center min-h-screen text-white bg-no-repeat bg-cover  object-contain"
      style={{ backgroundImage: `url(${singin})` }}
    >
      <div className="relative sm:w-[40vw] sm:h-[40vw] w-[0vw] h-[0vw] hidden  max-w-60 max-h-60 mx-auto sm:flex items-center justify-center">
        {/* Center Logo */}
        <img
          src={fagglogo}
          className="sm:w-[15vw] sm:h-[15vw] w-[16vw] h-[16vw] max-w-24 max-h-24 object-fill absolute bg-white rounded-full p-2 border-2 border-[#ff0000]"
        />

        {/* Circular Positioned Divs */}
        {[
          { letter: 'A', angle: 0, color: 'bg-[#ff0000]' },
          { letter: '1', angle: 60, color: 'bg-green-500' },
          { letter: 'अ', angle: 120, color: 'bg-yellow-400' },
          { letter: 'D', angle: 180, color: 'bg-blue-500' },
          { letter: '5', angle: 240, color: 'bg-orange-500' },
          { letter: 'न', angle: 300, color: 'bg-purple-500' },
        ].map(({ letter, angle, color }) => {
          const radius = 'max(10vw, 90px)' // Dynamically scales radius
          return (
            <div
              key={letter}
              className={`absolute w-[15vw] h-[15vw] max-w-18 max-h-18 sm:w-[8vw] sm:h-[8vw] flex  justify-center items-center rounded-full text-white font-bold text-[4vw] sm:text-4xl ${color} hover:scale-105 transition-all`}
              style={{
                top: `calc(50% - 5vw + ${radius} * sin(${
                  (angle * Math.PI) / 180
                }))`,
                left: `calc(50% - 4.4vw + ${radius} * cos(${
                  (angle * Math.PI) / 180
                }))`,
              }}
            >
              {letter}
            </div>
          )
        })}
      </div>

      <div className="container max-w-md mx-auto p-4">
        <div className="bg-black bg-opacity-65 p-8 rounded-lg border-red-500 border-2 ">
          <div className="bg-white rounded-full flex items-center justify-center w-32 h-32 mx-auto border-l-4  border-b-4 border-red-500">
            <img src={fagglogo} className="w-20 object-fill mx-auto mb-4" />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="flex items-center justify-start">
                <label className="block text-sm font-medium mb-2 bg-[#ff0000] w-[50px] px-1">
                  Email :
                </label>
                <span className="w-0 h-0 border-l-[0px] border-l-transparent border-t-[20px] border-t-[#ff0000] border-r-[13px] border-r-transparent mb-2"></span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleOnChange}
                className="w-full px-4 py-3 bg-white text-black rounded-lg border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="relative">
              <div className="flex items-center justify-start">
                <label className="block text-sm font-medium mb-2 bg-[#ff0000] w-[80px] px-1">
                  Password :
                </label>
                <span className="w-0 h-0 border-l-[0px] border-l-transparent border-t-[20px] border-t-[#ff0000] border-r-[13px] border-r-transparent mb-2"></span>
              </div>

              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={handleOnChange}
                className="w-full px-4 py-3 bg-white text-black rounded-lg border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button
                type="button"
                onClick={handlePasswordToggle}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <FaEye className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
              <Link
                to="/forgotpassword"
                className="block mt-2 text-white hover:underline text-right"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#d2d2d2] text-[#fe0000] font-bold rounded-lg hover:bg-[#c9c7c7] focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:ring-opacity-100 focus:scale-105 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
