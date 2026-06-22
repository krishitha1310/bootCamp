import React from 'react'

function Navbar() {
  return (
    <nav class="navbar bg-primary">
        <div class="container-fluid d-flex justify-content-between">
            <span class="text-white">Attendance Management System</span>
            <div>
                <span class="text-white me-3">Welcome Krishitha</span>
                <a href="login.html" class="text-white text-decoration-none">Logout</a>
            </div>
        </div>

    </nav>
  )
}

export default Navbar