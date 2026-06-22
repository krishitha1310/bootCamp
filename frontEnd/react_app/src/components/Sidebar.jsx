import React from 'react'

function Sidebar() {
    return (
        <div className="list-group mt-4  bg-tertiary">
            <a href="#" className="list-group-item list-group-item-action active">Dashboard</a>
            <a href="students.html" className="list-group-item list-group-item-action">Students</a>
            <a href="attendence.html" className="list-group-item list-group-item-action">Attendance</a>
            <a href="reports.html" className="list-group-item list-group-item-action">Reports</a>
        </div>
    )
}

export default Sidebar
