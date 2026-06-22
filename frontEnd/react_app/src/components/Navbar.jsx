import React from 'react'

function Navbar() {
  return (
    <nav className="navbar bg-primary">
        <div className="container-fluid d-flex justify-content-between">
            <span className="text-white">Attendence Management System</span>
            <div>
                <span className="text-white me-3">Welcome Krishitha</span>
                <a href="login.html" className="text-white text-decoration-none">Logout</a>
            </div>

        </div>
    </nav>
  )
}

export default Navbar
