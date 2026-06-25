import React from 'react'

function DashboardCard({heading,count}) {
    console.log()
    return (
        <div className="card">
            <div className="card-body text-center">
                <h5>{heading}</h5>
                <h5>{count}</h5>
            </div>
        </div>
    )
}

export default DashboardCard