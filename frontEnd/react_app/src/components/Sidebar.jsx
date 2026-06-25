import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div className="list-group mt-3">
            <Link to ="/" className='list-group-item'>Dashboard</Link>
            <Link to ="/students" className='list-group-item'>Students</Link>
            <Link to ="/attendance" className='list-group-item'>Attendance</Link>
            <Link to ="/reports" className='list-group-item'>Reports</Link>
        </div>
    )
}

export default Sidebar