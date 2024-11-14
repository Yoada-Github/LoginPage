import React from 'react'

function UserDashboard({onLogOut}) {
  return (
    <div>
        <h2>Welcome User</h2>
      <button onClick={onLogOut}>Logout</button>
    </div>
  )
}

export default UserDashboard
