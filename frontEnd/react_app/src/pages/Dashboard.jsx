import React from 'react'
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/Dashboardcard';
import StudentStatus from '../components/StudentStatus';
import Navbar from '../components/Navbar';

function Dashboard() {
    const students = [
  {
    hallTicket: "24AG1A0501",
    name: "Arjun",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0502",
    name: "Bhanu",
    department: "CSE",
    status: "A"
  },
  {
    hallTicket: "24AG1A0503",
    name: "Charan",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0504",
    name: "Deepak",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0505",
    name: "Eshwar",
    department: "CSE",
    status: "A"
  },
  {
    hallTicket: "24AG1A0506",
    name: "Farhan",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0507",
    name: "Ganesh",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0508",
    name: "Harish",
    department: "CSE",
    status: "A"
  },
  {
    hallTicket: "24AG1A0509",
    name: "Imran",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0510",
    name: "Jayanth",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0511",
    name: "Karthik",
    department: "CSE",
    status: "A"
  },
  {
    hallTicket: "24AG1A0512",
    name: "Lokesh",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0513",
    name: "Manoj",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0514",
    name: "Naveen",
    department: "CSE",
    status: "A"
  },
  {
    hallTicket: "24AG1A0515",
    name: "Omkar",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0516",
    name: "Praveen",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0517",
    name: "Rakesh",
    department: "CSE",
    status: "A"
  },
  {
    hallTicket: "24AG1A0518",
    name: "Sandeep",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0519",
    name: "Tarun",
    department: "CSE",
    status: "P"
  },
  {
    hallTicket: "24AG1A0520",
    name: "Vamshi",
    department: "CSE",
    status: "A"
  }
];

  
  return (
   <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h2 className="mt-3">Dashboard</h2>
            <p>Welcome to Attendance Management System</p>
            <div className="row">
              <div className="col-md-3">
                <DashboardCard heading="Total" count="100"/>
              </div>
              <div className="col-md-3">
                <DashboardCard heading="Present" count="85"/>
              </div>
              <div className="col-md-3">
                <DashboardCard heading="Absent" count="15"/>
              </div>
              <div className="col-md-3">
                <DashboardCard heading="Percentage" count="85%"/>
              </div>
            </div>
            <div>
              <h4 className="mt-3">Student List</h4>
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Roll no</th>
                    <th>Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student)=>(
                    <StudentStatus
                    rollno ={student.hallTicket}
                    name={student.name}
                    status={student.status}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
