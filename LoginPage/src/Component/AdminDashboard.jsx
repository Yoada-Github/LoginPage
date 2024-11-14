import React from 'react'

function AdminDashboard({onLogOut}) {
  return (
    <div>
      <h2>Welcome Admin</h2>
      <button onClick={onLogOut}>Logout</button>
    </div>
  )
}

export default AdminDashboard
