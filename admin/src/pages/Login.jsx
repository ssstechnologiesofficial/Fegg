import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import fagglogo from '../../public/eg-logo.png'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Hardcoded login functionality
    const hardcodedEmail = 'admin@gmail.com'
    const hardcodedPassword = 'admin123'

    if (data.email === hardcodedEmail && data.password === hardcodedPassword) {
      // Simulate setting a token in localStorage
      localStorage.setItem('token', 'hardcoded-token')
      navigate('/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <section
      id="login"
      className="flex items-center justify-center min-h-screen text-white"
    >
      <div className="container max-w-md mx-auto p-4">
        <div className="bg-gradient-to-br from-red-500 via-red-800 to-red-500 p-8 rounded-lg shadow-lg border border-gray-700">
          <div className="bg-white rounded-full flex items-center justify-center w-32 h-32 mx-auto">
            <img src={fagglogo} className="w-20 object-fill mx-auto mb-4" />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">Email :</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleOnChange}
                className="w-full px-4 py-3 bg-white text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-2">
                Password :
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={handleOnChange}
                className="w-full px-4 py-3 bg-white text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
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
              className="w-full py-3 bg-[#d2d2d2] text-[#fe0000] font-bold rounded-lg hover:bg-[#c9c7c7] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 focus:scale-105 transition-all"
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
