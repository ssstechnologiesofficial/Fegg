import React, { useState } from 'react'
import { useParams } from 'react-router-dom' // or next/router for Next.js
import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'

export default function ResetPasswordPage() {
  const { token } = useParams()
  const [newPassword, setNewPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(SummaryApi.Resetpassword.url, {
        token,
        newPassword,
      })
      alert(res.data.message)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Enter your new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
    </form>
  )
}
